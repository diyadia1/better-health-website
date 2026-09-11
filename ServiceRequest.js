import mongoose from 'mongoose';

const serviceRequestSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  service: { type: String, required: true },
  message: { type: String, required: true, trim: true }
}, { timestamps: true });

export default mongoose.model('ServiceRequest', serviceRequestSchema);
