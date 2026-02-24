const mongoose = require("mongoose");
const { Schema } = mongoose;
const AutoIncrement = require("mongoose-sequence")(mongoose);

const ticketCommentsSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      unique: true,
    },
    ticket_id: {
      type: Schema.Types.ObjectId,
      ref: "Tickets",
      required: true,
    },
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

ticketCommentsSchema.plugin(AutoIncrement, {
  inc_field: "id",
  id: "ticketComment_counter",
  startAt: 1,
  inc_amount: 1,
});

const TicketComments = mongoose.model("TicketComments", ticketCommentsSchema);

module.exports = TicketComments;
