const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const rolesSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      unique: true,
    },
    name: {
      type: String,
      required: true,
      unique: true,
      enum: ["MANAGER", "SUPPORT", "USER"],
    },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  },
);

rolesSchema.plugin(AutoIncrement, {
  inc_field: "id",
  id: "role_counter",
  startAt: 1,
  inc_amount: 1,
});

const Roles = mongoose.model("Roles", rolesSchema);

module.exports = Roles;
