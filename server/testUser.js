import connectDB from "./configs/db.js";
import User from "./models/User.js";

const runTest = async () => {
  try {
    // Connect to MongoDB
    await connectDB();

    // Create a new user
    const newUser = await User.create({
      _id: "test123",
      name: "Test User",
      email: "test@example.com",
      Image: "https://via.placeholder.com/150",
    });

    console.log("✅ User created:", newUser);

    // Find the user
    const foundUser = await User.findById("test123");
    console.log("🔎 User found:", foundUser);

    // Delete the user
    await User.findByIdAndDelete("test123");
    console.log("🗑️ User deleted successfully");

    process.exit(0); // Exit after test finishes
  } catch (error) {
    console.error("❌ Test failed:", error.message);
    process.exit(1);
  }
};

runTest();
