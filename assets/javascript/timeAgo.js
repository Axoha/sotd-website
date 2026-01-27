function timeAgo(unixSeconds){
    if (!unixSeconds) {
        return "an unknown time ago"
    }

    const now  = Math.floor(Date.now()/1000)
    const diff = now - Number(unixSeconds)

    if (diff < 0) return "Just now"

    const units = [
        {name: "year", seconds: 60 * 60 * 24 * 365},
        {name: "month", seconds: 60 * 60 * 24 * 30},
        {name: "week", seconds: 60 * 60 * 24 * 7},
        {name: "day", seconds: 60 * 60 * 24},
        {name: "hour", seconds: 60 * 60},
        {name: "minute", seconds: 60},
        {name: "second", seconds: 1}
    ]

    for (const unit of units){
        const value = Math.floor(diff/unit.seconds)
        if (value >= 1) {
            return `${value} ${unit.name}${value !== 1 ? "s" : ""} ago`
        }
    }

    return "Just now"
}

export { timeAgo }