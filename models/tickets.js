const mongoose = require("mongoose");
const { Schema } = mongoose;
const AutoIncrement = require("mongoose-sequence")(mongoose);

const ticketsSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      unique: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 255,
    },

    description: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: ["OPEN", "IN_PROGRESS", "RESOLVED", "CLOSED"],
      default: "OPEN",
    },

    priority: {
      type: String,
      enum: ["LOW", "MEDIUM", "HIGH"],
      default: "MEDIUM",
    },

    created_by: {
      type: Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },

    assigned_to: {
      type: Schema.Types.ObjectId,
      ref: "Users",
      default: null,
    },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  },
);

ticketsSchema.plugin(AutoIncrement, {
  inc_field: "id",
  id: "ticket_counter",
  startAt: 1,
  inc_amount: 1,
});

const Tickets = mongoose.model("Tickets", ticketsSchema);

module.exports = Tickets;
