import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

/* ==========================
   CONEXIÓN A MONGODB ATLAS
========================== */

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB conectado correctamente"))
    .catch((error) => console.error("Error de conexión:", error));


/* ==========================
   MODELOS
========================== */

// 🔹 Restaurant
const restaurantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: String,
    phone: String,
    email: String,
    capacity: Number,
    openingHours: String
}, { timestamps: true });

const Restaurant = mongoose.model("Restaurant", restaurantSchema);


// 🔹 Reservation
const reservationSchema = new mongoose.Schema({
    customerName: { type: String, required: true },
    customerPhone: String,
    customerEmail: String,
    reservationDate: { type: Date, required: true },
    numberOfGuests: Number,
    restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Restaurant",
        required: true
    }
}, { timestamps: true });

const Reservation = mongoose.model("Reservation", reservationSchema);


/* ==========================
   RUTAS RESTAURANT
========================== */

// Crear restaurante
app.post("/restaurants", async (req, res) => {
    try {
        const restaurant = await Restaurant.create(req.body);
        res.status(201).json(restaurant);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Obtener restaurantes
app.get("/restaurants", async (req, res) => {
    const restaurants = await Restaurant.find();
    res.json(restaurants);
});

// Eliminar restaurante
app.delete("/restaurants/:id", async (req, res) => {
    await Restaurant.findByIdAndDelete(req.params.id);
    res.json({ message: "Restaurant eliminado" });
});


/* ==========================
   RUTAS RESERVATION
========================== */

// Crear reserva
app.post("/reservations", async (req, res) => {
    try {
        const {
            customerName,
            reservationDate,
            restaurant
        } = req.body;

        if (!customerName || !reservationDate || !restaurant) {
            return res.status(400).json({
                message: "Nombre, fecha y restaurante son obligatorios"
            });
        }

        // Verificar que restaurante exista
        const existingRestaurant = await Restaurant.findById(restaurant);
        if (!existingRestaurant) {
            return res.status(404).json({
                message: "El restaurante no existe"
            });
        }

        const reservation = await Reservation.create({
            ...req.body,
            reservationDate: new Date(reservationDate)
        });

        res.status(201).json(reservation);

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Obtener reservas con populate
app.get("/reservations", async (req, res) => {
    const reservations = await Reservation.find()
        .populate("restaurant");

    res.json(reservations);
});


/* ==========================
   SERVIDOR
========================== */

app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});
