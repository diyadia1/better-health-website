import { Router } from 'express';
import ServiceRequest from '../models/ServiceRequest.js';

const router = Router();

router.post('/', async (req, res) => {
  try {
    const request = await ServiceRequest.create(req.body);
    res.status(201).json({ message: 'Service request saved', request });
  } catch (error) {
    res.status(400).json({ message: 'Unable to save request', error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const requests = await ServiceRequest.find().sort({ createdAt: -1 });
    res.json(requests);
  } catch (error) {
    res.status(500).json({ message: 'Unable to fetch requests' });
  }
});

export default router;
