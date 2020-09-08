

highPriorityCount = orders.filter(o => "high" === o.opriority
                                    || "rush" === o.priority)
                                .length;
