const mongoose = require("mongoose");
const { Schema } = mongoose;
const AutoIncrement = require("mongoose-sequence")(mongoose);

const ticketStatusLogsSchema = new mongoose.Schema({
  ticket_id: {
    type: Schema.Types.ObjectId,
    ref: "Tickets",
    required: true,
  },

  old_status: {
    type: String,
    enum: ["OPEN", "IN_PROGRESS", "RESOLVED", "CLOSED"],
    required: true,
  },

  new_status: {
    type: String,
    enum: ["OPEN", "IN_PROGRESS", "RESOLVED", "CLOSED"],
    required: true,
  },

  changed_by: {
    type: Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },

  changed_at: {
    type: Date,
    default: Date.now,
  },
});

ticketStatusLogsSchema.plugin(AutoIncrement, {
  inc_field: "id",
  id: "ticketStatusLogs_counter",
  startAt: 1,
  inc_amount: 1,
});

const TicketStatusLogs = mongoose.model(
  "TicketStatusLogs",
  ticketStatusLogsSchema,
);

module.exports = TicketStatusLogs;
