

highPriorityCount = orders.filter(o => "high" === o.opriorityString
                                    || "rush" === o.priorityString)
                                .length;
