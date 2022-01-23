import mongoose from 'mongoose';
import { Vehicle } from '../../shared/models/vehicle.model.js';


const {model, Schema} = mongoose;

const vehicleSchema = new Schema<Vehicle>({
    id: {type: mongoose.Types.ObjectId},
    year: {type: Number, required: true},
    make: {type: String, required: true},
    model: {type: String, required: true}
});

export const VehicleModel = model<Vehicle>('Vehicle',vehicleSchema);