const DailyEntry = require('../models/data.model');
const axios = require('axios');

// Create a new daily entry
exports.createDailyEntry = async (req, res) => {
  try {
    const entry = new DailyEntry(req.body);
    await entry.save();
    res.status(201).json({ message: 'Entry created successfully', entry });
  } catch (error) {
    console.error('Error creating daily entry:', error.message);
    res.status(400).json({ message: error.message });
  }
};

// Get all daily entries
exports.getAllDailyEntries = async (req, res) => {
  try {
    const entries = await DailyEntry.find();
    res.status(200).json(entries);
  } catch (error) {
    console.error('Error fetching daily entries:', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Get a single daily entry by ID
exports.getDailyEntryById = async (req, res) => {
  try {
    const entry = await DailyEntry.findById(req.params.id);
    if (!entry) {
      return res.status(404).json({ message: 'Entry not found' });
    }
    res.status(200).json(entry);
  } catch (error) {
    console.error('Error fetching daily entry:', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Update a daily entry by ID
exports.updateDailyEntry = async (req, res) => {
  try {
    const entry = await DailyEntry.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!entry) {
      return res.status(404).json({ message: 'Entry not found' });
    }
    res.status(200).json({ message: 'Entry updated successfully', entry });
  } catch (error) {
    console.error('Error updating daily entry:', error.message);
    res.status(400).json({ message: error.message });
  }
};

// Delete a daily entry by ID
exports.deleteDailyEntry = async (req, res) => {
  try {
    const entry = await DailyEntry.findByIdAndDelete(req.params.id);
    if (!entry) {
      return res.status(404).json({ message: 'Entry not found' });
    }
    res.status(200).json({ message: 'Entry deleted successfully' });
  } catch (error) {
    console.error('Error deleting daily entry:', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Handle save operation
const handleSave = async () => {
  try {
    const userEmail = JSON.parse(localStorage.getItem("authToken")).email; // Get userEmail from localStorage
    const payload = {
      userEmail,
      date,
      mood,
      activityLevel: activity,
      caloricIntake: calories,
      sleepHours: sleep,
      stressLevel: stress,
    };

    if (!date || !userEmail) {
      alert("Date and user email are required.");
      return;
    }

    console.log("Payload:", payload); // Log the payload for debugging

    const response = await axios.post("http://localhost:5000/api/daily-entry", payload);
    console.log("Response:", response.data); // Log the response for debugging
    alert("Entry saved successfully!");
  } catch (error) {
    console.error("Failed to save data:", error.message);
    alert("Failed to save entry.");
  }
};
