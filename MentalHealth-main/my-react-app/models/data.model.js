const mongoose = require('mongoose');

const dailyEntrySchema = new mongoose.Schema({
  userEmail: { type: String, required: true },
  date: { type: Date, required: true },
  mood: { type: String, enum: ['happy', 'neutral', 'sad'], default: 'neutral' },
  activityLevel: { type: Number, min: 1, max: 5 },
  caloricIntake: { type: Number, min: 1000, max: 4000 },
  sleepHours: { type: Number, min: 0, max: 24 },
  stressLevel: { type: Number, min: 1, max: 10 },
}, { timestamps: true });

module.exports = mongoose.model('DailyEntry', dailyEntrySchema);
