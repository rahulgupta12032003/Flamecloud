const mongoose = require('mongoose');

const ActionPlanSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    }
},{timestamps: true})

const ActionPlanModel = mongoose.model("ActionPlan", ActionPlanSchema);
module.exports = ActionPlanModel;