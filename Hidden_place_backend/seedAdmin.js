const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User'); // Make sure paths match your structure!
const dotenv = require('dotenv');

dotenv.config();
const adminEmail = process.env.SEED_ADMIN_EMAIL;
const adminPassword = process.env.SEED_ADMIN_PASSWORD;
if (!adminEmail || !adminPassword) {
  throw new Error("Set SEED_ADMIN_EMAIL and SEED_ADMIN_PASSWORD before seeding the admin account.");
}

const seed = async () => {
  try {
    // 1. Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB for Seeding...");

    // 2. Check if the Master Admin already exists
    const existing = await User.findOne({ email: adminEmail });
    if (existing) {
      console.log("⚠️  Admin already exists! You can skip this script.");
      process.exit(0);
    }

    // 3. Create the New Master Admin
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(adminPassword, salt);

    const admin = new User({
      name: "Platform Master Admin",
      email: adminEmail,
      password: hashedPassword,
      role: "admin",
      isApproved: true,
      bio: "Master administrator for Hidden Gems SL platform."
    });

    // 4. Save and Finish
    await admin.save();
    console.log("✅ SUCCESS! Master Admin Created:");
    console.log("   📧 Email: " + adminEmail);
    console.log("   🔑 Password configured via environment variable.");
    console.log("-----------------------------------------");
    process.exit(0);

  } catch (error) {
    console.error("❌ Seeding Failed:", error.message);
    process.exit(1);
  }
};

seed();
