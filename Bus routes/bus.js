const routes = {
    "Sangareddy-Bachupally": [
        { from: "Sangareddy", to: "Ameenpur", bus: "TSRTC 243", time: "25 mins", startTime: "06:00" },
        { from: "Ameenpur", to: "Miyapur", bus: "TSRTC 249", time: "15 mins", startTime: "06:30" },
        { from: "Miyapur", to: "Bachupally", bus: "TSRTC 56", time: "40 mins", startTime: "07:00" }
    ],
    "Sangareddy-LB Nagar": [
        { from: "Sangareddy", to: "Miyapur", bus: "TSRTC 243", time: "40 mins", startTime: "06:30" },
        { from: "Miyapur", to: "LB Nagar", bus: "MSRTC 178", time: "1 hr 5 mins", startTime: "07:15" }
    ],
    "Sangareddy-Uppal": [
        { from: "Sangareddy", to: "Miyapur", bus: "TSRTC 243", time: "40 mins", startTime: "06:30" },
        { from: "Miyapur", to: "Uppal", bus: "MSRTC 177", time: "55 mins", startTime: "07:15" }
    ],
    "Sangareddy-Kondapur": [
        { from: "Sangareddy", to: "Miyapur", bus: "TSRTC 243", time: "40 mins", startTime: "06:30" },
        { from: "Miyapur", to: "Kondapur", bus: "MSRTC 176", time: "30 mins", startTime: "07:15" }
    ],
    "Sangareddy-Ameerpet": [
        { from: "Sangareddy", to: "Miyapur", bus: "TSRTC 243", time: "40 mins", startTime: "06:30" },
        { from: "Miyapur", to: "Ameerpet", bus: "KSRTC 180", time: "40 mins", startTime: "07:15" }
    ],
    "Sangareddy-KPHB": [
        { from: "Sangareddy", to: "Miyapur", bus: "TSRTC 243", time: "40 mins", startTime: "06:30" },
        { from: "Miyapur", to: "KPHB", bus: "TSRTC 56", time: "35 mins", startTime: "07:15" }
    ],
    "Sangareddy-Gachibowli": [
        { from: "Sangareddy", to: "Miyapur", bus: "TSRTC 243", time: "40 mins", startTime: "06:30" },
        { from: "Miyapur", to: "Gachibowli", bus: "TSRTC 526", time: "40 mins", startTime: "07:15" }
    ],
    "Sangareddy-Banjara Hills": [
        { from: "Sangareddy", to: "Miyapur", bus: "TSRTC 243", time: "40 mins", startTime: "06:30" },
        { from: "Miyapur", to: "Banjara Hills", bus: "KSRTC 525", time: "55 mins", startTime: "07:15" }
    ],
    "Sangareddy-Jubilee Hills": [
        { from: "Sangareddy", to: "Miyapur", bus: "TSRTC 243", time: "40 mins", startTime: "06:30" },
        { from: "Miyapur", to: "Jubilee Hills", bus: "KSRTC 525", time: "1 hr", startTime: "07:15" }
    ],
    "Sangareddy-Secunderabad": [
        { from: "Sangareddy", to: "Miyapur", bus: "TSRTC 243", time: "40 mins", startTime: "06:30" },
        { from: "Miyapur", to: "Secunderabad", bus: "MSRTC 177", time: "1 hr 5 mins", startTime: "07:15" }
    ],
    "Sangareddy-Madhapur": [
        { from: "Sangareddy", to: "Miyapur", bus: "TSRTC 243", time: "40 mins", startTime: "06:30" },
        { from: "Miyapur", to: "Madhapur", bus: "MSRTC 525", time: "40 mins", startTime: "07:15" }
    ],
    "Sangareddy-Hitec City": [
        { from: "Sangareddy", to: "Miyapur", bus: "TSRTC 243", time: "40 mins", startTime: "06:30" },
        { from: "Miyapur", to: "Hitec City", bus: "MSRTC 49", time: "35 mins", startTime: "07:15" }
    ],
    "Sangareddy-Dilsukhnagar": [
        { from: "Sangareddy", to: "Miyapur", bus: "TSRTC 243", time: "40 mins", startTime: "06:30" },
        { from: "Miyapur", to: "Dilsukhnagar", bus: "MSRTC 176", time: "1 hr 10 mins", startTime: "07:15" }
    ],
    "Sangareddy-Charminar": [
        { from: "Sangareddy", to: "Miyapur", bus: "TSRTC 243", time: "40 mins", startTime: "06:30" },
        { from: "Miyapur", to: "Charminar", bus: "KSRTC 178", time: "1 hr", startTime: "07:15" }
    ],
    "Sangareddy-Begumpet": [
        { from: "Sangareddy", to: "Miyapur", bus: "TSRTC 243", time: "40 mins", startTime: "06:30" },
        { from: "Miyapur", to: "Begumpet", bus: "MSRTC 526", time: "40 mins", startTime: "07:15" }
    ],
    "Sangareddy-Balanagar": [
        { from: "Sangareddy", to: "Miyapur", bus: "TSRTC 243", time: "40 mins", startTime: "06:30" },
        { from: "Miyapur", to: "Balanagar", bus: "KSRTC 407", time: "50 mins", startTime: "07:15" }
    ],
    "Bachupally-Sangareddy": [
        { from: "Bachupally", to: "Miyapur", bus: "TSRTC 249", time: "15 mins", startTime: "06:00" },
        { from: "Miyapur", to: "Sangareddy", bus: "TSRTC 243", time: "25 mins", startTime: "06:30" }
    ],
    "Bachupally-LB Nagar": [
        { from: "Bachupally", to: "Miyapur", bus: "TSRTC 249", time: "15 mins", startTime: "06:00" },
        { from: "Miyapur", to: "LB Nagar", bus: "MSRTC 178", time: "1 hr 5 mins", startTime: "06:30" }
    ],
    "Bachupally-Uppal": [
        { from: "Bachupally", to: "Miyapur", bus: "TSRTC 249", time: "15 mins", startTime: "06:00" },
        { from: "Miyapur", to: "Uppal", bus: "MSRTC 177", time: "55 mins", startTime: "06:30" }
    ],
    "Bachupally-Kondapur": [
        { from: "Bachupally", to: "Miyapur", bus: "TSRTC 249", time: "15 mins", startTime: "06:00" },
        { from: "Miyapur", to: "Kondapur", bus: "MSRTC 176", time: "30 mins", startTime: "06:30" }
    ],
    "Bachupally-Ameerpet": [
        { from: "Bachupally", to: "Miyapur", bus: "TSRTC 249", time: "15 mins", startTime: "06:00" },
        { from: "Miyapur", to: "Ameerpet", bus: "KSRTC 180", time: "40 mins", startTime: "06:30" }
    ],
    "Bachupally-KPHB": [
        { from: "Bachupally", to: "Miyapur", bus: "TSRTC 249", time: "15 mins", startTime: "06:00" },
        { from: "Miyapur", to: "KPHB", bus: "TSRTC 56", time: "35 mins", startTime: "06:30" }
    ],
    "Bachupally-Gachibowli": [
        { from: "Bachupally", to: "Miyapur", bus: "TSRTC 249", time: "15 mins", startTime: "06:00" },
        { from: "Miyapur", to: "Gachibowli", bus: "TSRTC 526", time: "40 mins", startTime: "06:30" }
    ],
    "Bachupally-Banjara Hills": [
        { from: "Bachupally", to: "Miyapur", bus: "TSRTC 249", time: "15 mins", startTime: "06:00" },
        { from: "Miyapur", to: "Banjara Hills", bus: "KSRTC 525", time: "55 mins", startTime: "06:30" }
    ],
    "Bachupally-Jubilee Hills": [
        { from: "Bachupally", to: "Miyapur", bus: "TSRTC 249", time: "15 mins", startTime: "06:00" },
        { from: "Miyapur", to: "Jubilee Hills", bus: "KSRTC 525", time: "1 hr", startTime: "06:30" }
    ],
    "Bachupally-Secunderabad": [
        { from: "Bachupally", to: "Miyapur", bus: "TSRTC 249", time: "15 mins", startTime: "06:00" },
        { from: "Miyapur", to: "Secunderabad", bus: "MSRTC 177", time: "1 hr 5 mins", startTime: "06:30" }
    ],
    "Bachupally-Madhapur": [
        { from: "Bachupally", to: "Miyapur", bus: "TSRTC 249", time: "15 mins", startTime: "06:00" },
        { from: "Miyapur", to: "Madhapur", bus: "MSRTC 525", time: "40 mins", startTime: "06:30" }
    ],
    "Bachupally-Hitec City": [
        { from: "Bachupally", to: "Miyapur", bus: "TSRTC 249", time: "15 mins", startTime: "06:00" },
        { from: "Miyapur", to: "Hitec City", bus: "MSRTC 49", time: "35 mins", startTime: "06:30" }
    ],
    "Bachupally-Dilsukhnagar": [
        { from: "Bachupally", to: "Miyapur", bus: "TSRTC 249", time: "15 mins", startTime: "06:00" },
        { from: "Miyapur", to: "Dilsukhnagar", bus: "MSRTC 176", time: "1 hr 10 mins", startTime: "06:30" }
    ],
    "Bachupally-Charminar": [
        { from: "Bachupally", to: "Miyapur", bus: "TSRTC 249", time: "15 mins", startTime: "06:00" },
        { from: "Miyapur", to: "Charminar", bus: "KSRTC 178", time: "1 hr", startTime: "06:30" }
    ],
    "Bachupally-Begumpet": [
        { from: "Bachupally", to: "Miyapur", bus: "TSRTC 249", time: "15 mins", startTime: "06:00" },
        { from: "Miyapur", to: "Begumpet", bus: "MSRTC 526", time: "40 mins", startTime: "06:30" }
    ],
    "Bachupally-Balanagar": [
        { from: "Bachupally", to: "Miyapur", bus: "TSRTC 249", time: "15 mins", startTime: "06:00" },
        { from: "Miyapur", to: "Balanagar", bus: "KSRTC 407", time: "50 mins", startTime: "06:30" }
    ],
    "LB Nagar-Sangareddy": [
        { from: "LB Nagar", to: "Dilsukhnagar", bus: "TSRTC 101", time: "10 mins", startTime: "06:00" },
        { from: "Dilsukhnagar", to: "Miyapur", bus: "MSRTC 444", time: "35 mins", startTime: "06:15" },
        { from: "Miyapur", to: "Sangareddy", bus: "MSRTC 618", time: "45 mins", startTime: "06:55" }
    ],
    "LB Nagar-Bachupally": [
        { from: "LB Nagar", to: "Dilsukhnagar", bus: "TSRTC 101", time: "10 mins", startTime: "06:00" },
        { from: "Dilsukhnagar", to: "Ameerpet", bus: "MSRTC 742", time: "40 mins", startTime: "06:15" },
        { from: "Ameerpet", to: "Bachupally", bus: "TSRTC 249", time: "35 mins", startTime: "06:55" }
    ],
    "LB Nagar-Uppal": [
        { from: "LB Nagar", to: "Dilsukhnagar", bus: "TSRTC 101", time: "10 mins", startTime: "06:00" },
        { from: "Dilsukhnagar", to: "Uppal", bus: "MSRTC 250", time: "45 mins", startTime: "06:15" }
    ],
    "LB Nagar-Kondapur": [
        { from: "LB Nagar", to: "Dilsukhnagar", bus: "TSRTC 101", time: "10 mins", startTime: "06:00" },
        { from: "Dilsukhnagar", to: "Ameerpet", bus: "MSRTC 917", time: "40 mins", startTime: "06:15" },
        { from: "Ameerpet", to: "Kondapur", bus: "TSRTC 210", time: "30 mins", startTime: "06:55" }
    ],
    "LB Nagar-Ameerpet": [
        { from: "LB Nagar", to: "Dilsukhnagar", bus: "TSRTC 101", time: "10 mins", startTime: "06:00" },
        { from: "Dilsukhnagar", to: "Ameerpet", bus: "MSRTC 526", time: "40 mins", startTime: "06:15" }
    ],
    "LB Nagar-Gachibowli": [
        { from: "LB Nagar", to: "Dilsukhnagar", bus: "TSRTC 101", time: "10 mins", startTime: "06:00" },
        { from: "Dilsukhnagar", to: "Ameerpet", bus: "MSRTC 805", time: "40 mins", startTime: "06:15" },
        { from: "Ameerpet", to: "Gachibowli", bus: "TSRTC 217", time: "50 mins", startTime: "06:55" }
    ],
    "LB Nagar-Banjara Hills": [
        { from: "LB Nagar", to: "Dilsukhnagar", bus: "TSRTC 101", time: "10 mins", startTime: "06:00" },
        { from: "Dilsukhnagar", to: "Ameerpet", bus: "MSRTC 917", time: "40 mins", startTime: "06:15" },
        { from: "Ameerpet", to: "Banjara Hills", bus: "TSRTC 206", time: "35 mins", startTime: "06:55" }
    ],
    "LB Nagar-Jubilee Hills": [
        { from: "LB Nagar", to: "Dilsukhnagar", bus: "TSRTC 101", time: "10 mins", startTime: "06:00" },
        { from: "Dilsukhnagar", to: "Ameerpet", bus: "MSRTC 747", time: "40 mins", startTime: "06:15" },
        { from: "Ameerpet", to: "Jubilee Hills", bus: "TSRTC 178", time: "45 mins", startTime: "06:55" }
    ],
    "LB Nagar-Secunderabad": [
        { from: "LB Nagar", to: "Dilsukhnagar", bus: "TSRTC 101", time: "10 mins", startTime: "06:00" },
        { from: "Dilsukhnagar", to: "Ameerpet", bus: "MSRTC 444", time: "40 mins", startTime: "06:15" },
        { from: "Ameerpet", to: "Secunderabad", bus: "TSRTC 510", time: "40 mins", startTime: "06:55" }
    ],
    "LB Nagar-Madhapur": [
        { from: "LB Nagar", to: "Dilsukhnagar", bus: "TSRTC 101", time: "10 mins", startTime: "06:00" },
        { from: "Dilsukhnagar", to: "Ameerpet", bus: "MSRTC 705", time: "40 mins", startTime: "06:15" },
        { from: "Ameerpet", to: "Madhapur", bus: "TSRTC 207", time: "35 mins", startTime: "06:55" }
    ],
    "LB Nagar-Hitec City": [
        { from: "LB Nagar", to: "Dilsukhnagar", bus: "TSRTC 101", time: "10 mins", startTime: "06:00" },
        { from: "Dilsukhnagar", to: "Ameerpet", bus: "MSRTC 119", time: "40 mins", startTime: "06:15" },
        { from: "Ameerpet", to: "Hitec City", bus: "TSRTC 219", time: "50 mins", startTime: "06:55" }
    ],
    "LB Nagar-Dilsukhnagar": [
        { from: "LB Nagar", to: "Dilsukhnagar", bus: "TSRTC 101", time: "10 mins", startTime: "06:00" }
    ],
    "LB Nagar-Charminar": [
        { from: "LB Nagar", to: "Dilsukhnagar", bus: "TSRTC 101", time: "10 mins", startTime: "06:00" },
        { from: "Dilsukhnagar", to: "Charminar", bus: "MSRTC 178", time: "15 mins", startTime: "06:15" }
    ],
    "LB Nagar-Begumpet": [
        { from: "LB Nagar", to: "Dilsukhnagar", bus: "TSRTC 101", time: "10 mins", startTime: "06:00" },
        { from: "Dilsukhnagar", to: "Ameerpet", bus: "MSRTC 526", time: "40 mins", startTime: "06:15" },
        { from: "Ameerpet", to: "Begumpet", bus: "TSRTC 506", time: "25 mins", startTime: "06:55" }
    ],
    "LB Nagar-Balanagar": [
        { from: "LB Nagar", to: "Dilsukhnagar", bus: "TSRTC 101", time: "10 mins", startTime: "06:00" },
        { from: "Dilsukhnagar", to: "Ameerpet", bus: "MSRTC 726", time: "40 mins", startTime: "06:15" },
        { from: "Ameerpet", to: "Balanagar", bus: "TSRTC 223", time: "30 mins", startTime: "06:55" }
    ],"Uppal-Sangareddy": [
        { from: "Uppal", to: "Malkajgiri", bus: "TSRTC 206", time: "20 mins", startTime: "06:00" },
        { from: "Malkajgiri", to: "Ameerpet", bus: "MSRTC 444", time: "35 mins", startTime: "06:30" },
        { from: "Ameerpet", to: "Sangareddy", bus: "MSRTC 618", time: "45 mins", startTime: "07:10" }
    ],
    "Uppal-Bachupally": [
        { from: "Uppal", to: "Malkajgiri", bus: "TSRTC 206", time: "20 mins", startTime: "06:00" },
        { from: "Malkajgiri", to: "Ameerpet", bus: "MSRTC 745", time: "40 mins", startTime: "06:30" },
        { from: "Ameerpet", to: "Bachupally", bus: "TSRTC 249", time: "35 mins", startTime: "07:10" }
    ],
    "Uppal-LB Nagar": [
        { from: "Uppal", to: "Malkajgiri", bus: "TSRTC 206", time: "20 mins", startTime: "06:00" },
        { from: "Malkajgiri", to: "Dilsukhnagar", bus: "MSRTC 105", time: "30 mins", startTime: "06:30" },
        { from: "Dilsukhnagar", to: "LB Nagar", bus: "TSRTC 101", time: "10 mins", startTime: "07:00" }
    ],
    "Uppal-Kondapur": [
        { from: "Uppal", to: "Malkajgiri", bus: "TSRTC 206", time: "20 mins", startTime: "06:00" },
        { from: "Malkajgiri", to: "Ameerpet", bus: "MSRTC 705", time: "35 mins", startTime: "06:30" },
        { from: "Ameerpet", to: "Kondapur", bus: "TSRTC 210", time: "30 mins", startTime: "07:10" }
    ],
    "Uppal-Ameerpet": [
        { from: "Uppal", to: "Malkajgiri", bus: "TSRTC 206", time: "20 mins", startTime: "06:00" },
        { from: "Malkajgiri", to: "Ameerpet", bus: "MSRTC 917", time: "40 mins", startTime: "06:30" }
    ],
    "Uppal-Gachibowli": [
        { from: "Uppal", to: "Malkajgiri", bus: "TSRTC 206", time: "20 mins", startTime: "06:00" },
        { from: "Malkajgiri", to: "Ameerpet", bus: "MSRTC 805", time: "40 mins", startTime: "06:30" },
        { from: "Ameerpet", to: "Gachibowli", bus: "TSRTC 217", time: "50 mins", startTime: "07:10" }
    ],
    "Uppal-Banjara Hills": [
        { from: "Uppal", to: "Malkajgiri", bus: "TSRTC 206", time: "20 mins", startTime: "06:00" },
        { from: "Malkajgiri", to: "Ameerpet", bus: "MSRTC 917", time: "40 mins", startTime: "06:30" },
        { from: "Ameerpet", to: "Banjara Hills", bus: "TSRTC 206", time: "35 mins", startTime: "07:10" }
    ],
    "Uppal-Jubilee Hills": [
        { from: "Uppal", to: "Malkajgiri", bus: "TSRTC 206", time: "20 mins", startTime: "06:00" },
        { from: "Malkajgiri", to: "Ameerpet", bus: "MSRTC 747", time: "40 mins", startTime: "06:30" },
        { from: "Ameerpet", to: "Jubilee Hills", bus: "TSRTC 178", time: "45 mins", startTime: "07:10" }
    ],
    "Uppal-Secunderabad": [
        { from: "Uppal", to: "Malkajgiri", bus: "TSRTC 206", time: "20 mins", startTime: "06:00" },
        { from: "Malkajgiri", to: "Ameerpet", bus: "MSRTC 444", time: "35 mins", startTime: "06:30" },
        { from: "Ameerpet", to: "Secunderabad", bus: "TSRTC 510", time: "40 mins", startTime: "07:10" }
    ],
    "Uppal-Madhapur": [
        { from: "Uppal", to: "Malkajgiri", bus: "TSRTC 206", time: "20 mins", startTime: "06:00" },
        { from: "Malkajgiri", to: "Ameerpet", bus: "MSRTC 705", time: "35 mins", startTime: "06:30" },
        { from: "Ameerpet", to: "Madhapur", bus: "TSRTC 207", time: "35 mins", startTime: "07:10" }
    ],
    "Uppal-Hitec City": [
        { from: "Uppal", to: "Malkajgiri", bus: "TSRTC 206", time: "20 mins", startTime: "06:00" },
        { from: "Malkajgiri", to: "Ameerpet", bus: "MSRTC 119", time: "40 mins", startTime: "06:30" },
        { from: "Ameerpet", to: "Hitec City", bus: "TSRTC 219", time: "50 mins", startTime: "07:10" }
    ],
    "Uppal-Dilsukhnagar": [
        { from: "Uppal", to: "Malkajgiri", bus: "TSRTC 206", time: "20 mins", startTime: "06:00" },
        { from: "Malkajgiri", to: "Dilsukhnagar", bus: "MSRTC 444", time: "25 mins", startTime: "06:30" }
    ],
    "Uppal-Charminar": [
        { from: "Uppal", to: "Malkajgiri", bus: "TSRTC 206", time: "20 mins", startTime: "06:00" },
        { from: "Malkajgiri", to: "Dilsukhnagar", bus: "MSRTC 444", time: "25 mins", startTime: "06:30" },
        { from: "Dilsukhnagar", to: "Charminar", bus: "MSRTC 178", time: "15 mins", startTime: "07:00" }
    ],
    "Uppal-Begumpet": [
        { from: "Uppal", to: "Malkajgiri", bus: "TSRTC 206", time: "20 mins", startTime: "06:00" },
        { from: "Malkajgiri", to: "Ameerpet", bus: "MSRTC 526", time: "40 mins", startTime: "06:30" },
        { from: "Ameerpet", to: "Begumpet", bus: "TSRTC 506", time: "25 mins", startTime: "07:10" }
    ],
    "Uppal-Balanagar": [
        { from: "Uppal", to: "Malkajgiri", bus: "TSRTC 206", time: "20 mins", startTime: "06:00" },
        { from: "Malkajgiri", to: "Ameerpet", bus: "MSRTC 726", time: "40 mins", startTime: "06:30" },
        { from: "Ameerpet", to: "Balanagar", bus: "TSRTC 223", time: "30 mins", startTime: "07:10" }
    ],
    "Kondapur-Sangareddy": [
        { from: "Kondapur", to: "Gachibowli", bus: "TSRTC 219", time: "20 mins", startTime: "06:00" },
        { from: "Gachibowli", to: "Madhapur", bus: "MSRTC 119", time: "25 mins", startTime: "06:30" },
        { from: "Madhapur", to: "Sangareddy", bus: "MSRTC 218", time: "50 mins", startTime: "07:00" }
    ],
    "Kondapur-Bachupally": [
        { from: "Kondapur", to: "Gachibowli", bus: "TSRTC 219", time: "20 mins", startTime: "06:00" },
        { from: "Gachibowli", to: "Ameerpet", bus: "MSRTC 136", time: "35 mins", startTime: "06:30" },
        { from: "Ameerpet", to: "Bachupally", bus: "TSRTC 249", time: "35 mins", startTime: "07:10" }
    ],
    "Kondapur-LB Nagar": [
        { from: "Kondapur", to: "Gachibowli", bus: "TSRTC 219", time: "20 mins", startTime: "06:00" },
        { from: "Gachibowli", to: "Ameerpet", bus: "MSRTC 147", time: "35 mins", startTime: "06:30" },
        { from: "Ameerpet", to: "LB Nagar", bus: "TSRTC 210", time: "40 mins", startTime: "07:10" }
    ],
    "Kondapur-Uppal": [
        { from: "Kondapur", to: "Gachibowli", bus: "TSRTC 219", time: "20 mins", startTime: "06:00" },
        { from: "Gachibowli", to: "Madhapur", bus: "MSRTC 705", time: "30 mins", startTime: "06:30" },
        { from: "Madhapur", to: "Uppal", bus: "TSRTC 206", time: "50 mins", startTime: "07:10" }
    ],
    "Kondapur-Ameerpet": [
        { from: "Kondapur", to: "Gachibowli", bus: "TSRTC 219", time: "20 mins", startTime: "06:00" },
        { from: "Gachibowli", to: "Ameerpet", bus: "MSRTC 135", time: "30 mins", startTime: "06:30" }
    ],
    "Kondapur-Gachibowli": [
        { from: "Kondapur", to: "Gachibowli", bus: "TSRTC 219", time: "20 mins", startTime: "06:00" }
    ],
    "Kondapur-Banjara Hills": [
        { from: "Kondapur", to: "Gachibowli", bus: "TSRTC 219", time: "20 mins", startTime: "06:00" },
        { from: "Gachibowli", to: "Ameerpet", bus: "MSRTC 526", time: "30 mins", startTime: "06:30" },
        { from: "Ameerpet", to: "Banjara Hills", bus: "TSRTC 207", time: "35 mins", startTime: "07:10" }
    ],
    "Kondapur-Jubilee Hills": [
        { from: "Kondapur", to: "Gachibowli", bus: "TSRTC 219", time: "20 mins", startTime: "06:00" },
        { from: "Gachibowli", to: "Ameerpet", bus: "MSRTC 119", time: "35 mins", startTime: "06:30" },
        { from: "Ameerpet", to: "Jubilee Hills", bus: "TSRTC 218", time: "30 mins", startTime: "07:10" }
    ],
    "Kondapur-Secunderabad": [
        { from: "Kondapur", to: "Gachibowli", bus: "TSRTC 219", time: "20 mins", startTime: "06:00" },
        { from: "Gachibowli", to: "Ameerpet", bus: "MSRTC 707", time: "35 mins", startTime: "06:30" },
        { from: "Ameerpet", to: "Secunderabad", bus: "TSRTC 510", time: "40 mins", startTime: "07:10" }
    ],
    "Kondapur-Madhapur": [
        { from: "Kondapur", to: "Gachibowli", bus: "TSRTC 219", time: "20 mins", startTime: "06:00" },
        { from: "Gachibowli", to: "Madhapur", bus: "MSRTC 226", time: "25 mins", startTime: "06:30" }
    ],
    "Kondapur-Hitec City": [
        { from: "Kondapur", to: "Gachibowli", bus: "TSRTC 219", time: "20 mins", startTime: "06:00" },
        { from: "Gachibowli", to: "Ameerpet", bus: "MSRTC 827", time: "30 mins", startTime: "06:30" },
        { from: "Ameerpet", to: "Hitec City", bus: "TSRTC 210", time: "30 mins", startTime: "07:10" }
    ],
    "Kondapur-Dilsukhnagar": [
        { from: "Kondapur", to: "Gachibowli", bus: "TSRTC 219", time: "20 mins", startTime: "06:00" },
        { from: "Gachibowli", to: "Ameerpet", bus: "MSRTC 907", time: "35 mins", startTime: "06:30" },
        { from: "Ameerpet", to: "Dilsukhnagar", bus: "TSRTC 101", time: "40 mins", startTime: "07:10" }
    ],
    "Kondapur-Charminar": [
        { from: "Kondapur", to: "Gachibowli", bus: "TSRTC 219", time: "20 mins", startTime: "06:00" },
        { from: "Gachibowli", to: "Ameerpet", bus: "MSRTC 918", time: "30 mins", startTime: "06:30" },
        { from: "Ameerpet", to: "Charminar", bus: "TSRTC 178", time: "35 mins", startTime: "07:10" }
    ],
    "Kondapur-Begumpet": [
        { from: "Kondapur", to: "Gachibowli", bus: "TSRTC 219", time: "20 mins", startTime: "06:00" },
        { from: "Gachibowli", to: "Ameerpet", bus: "MSRTC 705", time: "35 mins", startTime: "06:30" },
        { from: "Ameerpet", to: "Begumpet", bus: "TSRTC 506", time: "25 mins", startTime: "07:10" }
    ],
    "Kondapur-Balanagar": [
        { from: "Kondapur", to: "Gachibowli", bus: "TSRTC 219", time: "20 mins", startTime: "06:00" },
        { from: "Gachibowli", to: "Ameerpet", bus: "MSRTC 707", time: "30 mins", startTime: "06:30" },
        { from: "Ameerpet", to: "Balanagar", bus: "TSRTC 223", time: "30 mins", startTime: "07:10" }
    ],
    "Ameerpet-Sangareddy": [
        { from: "Ameerpet", to: "Madhapur", bus: "TSRTC 222", time: "15 mins", startTime: "06:00" },
        { from: "Madhapur", to: "Gachibowli", bus: "MSRTC 119", time: "20 mins", startTime: "06:15" },
        { from: "Gachibowli", to: "Sangareddy", bus: "MSRTC 218", time: "45 mins", startTime: "06:45" }
    ],
    "Ameerpet-Bachupally": [
        { from: "Ameerpet", to: "Miyapur", bus: "TSRTC 249", time: "20 mins", startTime: "06:00" },
        { from: "Miyapur", to: "Bachupally", bus: "TSRTC 249", time: "30 mins", startTime: "06:30" }
    ],
    "Ameerpet-LB Nagar": [
        { from: "Ameerpet", to: "Gachibowli", bus: "MSRTC 147", time: "25 mins", startTime: "06:00" },
        { from: "Gachibowli", to: "LB Nagar", bus: "TSRTC 210", time: "40 mins", startTime: "06:30" }
    ],
    "Ameerpet-Uppal": [
        { from: "Ameerpet", to: "Gachibowli", bus: "TSRTC 219", time: "20 mins", startTime: "06:00" },
        { from: "Gachibowli", to: "Uppal", bus: "MSRTC 206", time: "50 mins", startTime: "06:30" }
    ],
    "Ameerpet-Kondapur": [
        { from: "Ameerpet", to: "Gachibowli", bus: "MSRTC 136", time: "25 mins", startTime: "06:00" },
        { from: "Gachibowli", to: "Kondapur", bus: "TSRTC 219", time: "20 mins", startTime: "06:30" }
    ],
    "Ameerpet-Gachibowli": [
        { from: "Ameerpet", to: "Gachibowli", bus: "MSRTC 136", time: "25 mins", startTime: "06:00" }
    ],
    "Ameerpet-Banjara Hills": [
        { from: "Ameerpet", to: "Banjara Hills", bus: "TSRTC 212", time: "15 mins", startTime: "06:00" }
    ],
    "Ameerpet-Jubilee Hills": [
        { from: "Ameerpet", to: "Jubilee Hills", bus: "TSRTC 214", time: "25 mins", startTime: "06:00" }
    ],
    "Ameerpet-Secunderabad": [
        { from: "Ameerpet", to: "Banjara Hills", bus: "TSRTC 210", time: "15 mins", startTime: "06:00" },
        { from: "Banjara Hills", to: "Secunderabad", bus: "MSRTC 510", time: "35 mins", startTime: "06:30" }
    ],
    "Ameerpet-Madhapur": [
        { from: "Ameerpet", to: "Madhapur", bus: "TSRTC 222", time: "15 mins", startTime: "06:00" }
    ],
    "Ameerpet-Hitec City": [
        { from: "Ameerpet", to: "Hitec City", bus: "MSRTC 905", time: "15 mins", startTime: "06:00" }
    ],
    "Ameerpet-Dilsukhnagar": [
        { from: "Ameerpet", to: "Dilsukhnagar", bus: "TSRTC 107", time: "30 mins", startTime: "06:00" }
    ],
    "Ameerpet-Charminar": [
        { from: "Ameerpet", to: "Charminar", bus: "TSRTC 178", time: "35 mins", startTime: "06:00" }
    ],
    "Ameerpet-Begumpet": [
        { from: "Ameerpet", to: "Begumpet", bus: "TSRTC 505", time: "20 mins", startTime: "06:00" }
    ],
    "Ameerpet-Balanagar": [
        { from: "Ameerpet", to: "Begumpet", bus: "TSRTC 505", time: "20 mins", startTime: "06:00" },
        { from: "Begumpet", to: "Balanagar", bus: "MSRTC 504", time: "25 mins", startTime: "06:30" }
    ],
    "KPHB-Sangareddy": [
        { from: "KPHB", to: "Miyapur", bus: "TSRTC 249", time: "10 mins", startTime: "06:00" },
        { from: "Miyapur", to: "Sangareddy", bus: "MSRTC 249", time: "50 mins", startTime: "06:20" }
    ],
    "KPHB-Bachupally": [
        { from: "KPHB", to: "Miyapur", bus: "TSRTC 249", time: "10 mins", startTime: "06:00" },
        { from: "Miyapur", to: "Bachupally", bus: "TSRTC 249", time: "20 mins", startTime: "06:15" }
    ],
    "KPHB-LB Nagar": [
        { from: "KPHB", to: "Miyapur", bus: "TSRTC 249", time: "10 mins", startTime: "06:00" },
        { from: "Miyapur", to: "LB Nagar", bus: "MSRTC 135", time: "50 mins", startTime: "06:20" }
    ],
    "KPHB-Uppal": [
        { from: "KPHB", to: "Gachibowli", bus: "MSRTC 110", time: "15 mins", startTime: "06:00" },
        { from: "Gachibowli", to: "Uppal", bus: "TSRTC 210", time: "40 mins", startTime: "06:20" }
    ],
    "KPHB-Kondapur": [
        { from: "KPHB", to: "Miyapur", bus: "TSRTC 249", time: "10 mins", startTime: "06:00" },
        { from: "Miyapur", to: "Kondapur", bus: "MSRTC 182", time: "30 mins", startTime: "06:20" }
    ],
    "KPHB-Gachibowli": [
        { from: "KPHB", to: "Gachibowli", bus: "TSRTC 110", time: "15 mins", startTime: "06:00" }
    ],
    "KPHB-Banjara Hills": [
        { from: "KPHB", to: "Madhapur", bus: "TSRTC 242", time: "15 mins", startTime: "06:00" },
        { from: "Madhapur", to: "Banjara Hills", bus: "MSRTC 222", time: "25 mins", startTime: "06:15" }
    ],
    "KPHB-Jubilee Hills": [
        { from: "KPHB", to: "Banjara Hills", bus: "TSRTC 222", time: "15 mins", startTime: "06:00" },
        { from: "Banjara Hills", to: "Jubilee Hills", bus: "MSRTC 211", time: "10 mins", startTime: "06:20" }
    ],
    "KPHB-Secunderabad": [
        { from: "KPHB", to: "Madhapur", bus: "TSRTC 210", time: "20 mins", startTime: "06:00" },
        { from: "Madhapur", to: "Secunderabad", bus: "MSRTC 301", time: "40 mins", startTime: "06:20" }
    ],
    "KPHB-Madhapur": [
        { from: "KPHB", to: "Madhapur", bus: "TSRTC 220", time: "15 mins", startTime: "06:00" }
    ],
    "KPHB-Hitec City": [
        { from: "KPHB", to: "Hitec City", bus: "MSRTC 119", time: "15 mins", startTime: "06:00" }
    ],
    "KPHB-Dilsukhnagar": [
        { from: "KPHB", to: "Madhapur", bus: "TSRTC 210", time: "20 mins", startTime: "06:00" },
        { from: "Madhapur", to: "Dilsukhnagar", bus: "MSRTC 218", time: "50 mins", startTime: "06:20" }
    ],
    "KPHB-Charminar": [
        { from: "KPHB", to: "Madhapur", bus: "TSRTC 210", time: "20 mins", startTime: "06:00" },
        { from: "Madhapur", to: "Charminar", bus: "MSRTC 231", time: "50 mins", startTime: "06:20" }
    ],
    "KPHB-Begumpet": [
        { from: "KPHB", to: "Begumpet", bus: "TSRTC 505", time: "15 mins", startTime: "06:00" }
    ],
    "KPHB-Balanagar": [
        { from: "KPHB", to: "Begumpet", bus: "TSRTC 505", time: "15 mins", startTime: "06:00" },
        { from: "Begumpet", to: "Balanagar", bus: "MSRTC 502", time: "25 mins", startTime: "06:15" }
    ],
    "Gachibowli-Sangareddy": [
        { from: "Gachibowli", to: "Miyapur", bus: "TSRTC 249", time: "15 mins", startTime: "06:00" },
        { from: "Miyapur", to: "Sangareddy", bus: "MSRTC 249", time: "50 mins", startTime: "06:20" }
    ],
    "Gachibowli-Bachupally": [
        { from: "Gachibowli", to: "Miyapur", bus: "TSRTC 249", time: "15 mins", startTime: "06:00" },
        { from: "Miyapur", to: "Bachupally", bus: "TSRTC 249", time: "20 mins", startTime: "06:15" }
    ],
    "Gachibowli-LB Nagar": [
        { from: "Gachibowli", to: "Miyapur", bus: "TSRTC 249", time: "15 mins", startTime: "06:00" },
        { from: "Miyapur", to: "LB Nagar", bus: "MSRTC 135", time: "50 mins", startTime: "06:20" }
    ],
    "Gachibowli-Uppal": [
        { from: "Gachibowli", to: "Madhapur", bus: "TSRTC 242", time: "15 mins", startTime: "06:00" },
        { from: "Madhapur", to: "Uppal", bus: "MSRTC 212", time: "35 mins", startTime: "06:20" }
    ],
    "Gachibowli-Kondapur": [
        { from: "Gachibowli", to: "Miyapur", bus: "TSRTC 249", time: "15 mins", startTime: "06:00" },
        { from: "Miyapur", to: "Kondapur", bus: "MSRTC 182", time: "30 mins", startTime: "06:20" }
    ],
    "Gachibowli-KPHB": [
        { from: "Gachibowli", to: "KPHB", bus: "TSRTC 110", time: "15 mins", startTime: "06:00" }
    ],
    "Gachibowli-Banjara Hills": [
        { from: "Gachibowli", to: "Madhapur", bus: "TSRTC 242", time: "15 mins", startTime: "06:00" },
        { from: "Madhapur", to: "Banjara Hills", bus: "MSRTC 222", time: "25 mins", startTime: "06:15" }
    ],
    "Gachibowli-Jubilee Hills": [
        { from: "Gachibowli", to: "Madhapur", bus: "TSRTC 242", time: "15 mins", startTime: "06:00" },
        { from: "Madhapur", to: "Banjara Hills", bus: "MSRTC 222", time: "25 mins", startTime: "06:15" },
        { from: "Banjara Hills", to: "Jubilee Hills", bus: "MSRTC 211", time: "10 mins", startTime: "06:45" }
    ],
    "Gachibowli-Secunderabad": [
        { from: "Gachibowli", to: "Madhapur", bus: "TSRTC 210", time: "20 mins", startTime: "06:00" },
        { from: "Madhapur", to: "Secunderabad", bus: "MSRTC 301", time: "40 mins", startTime: "06:20" }
    ],
    "Gachibowli-Madhapur": [
        { from: "Gachibowli", to: "Madhapur", bus: "TSRTC 220", time: "15 mins", startTime: "06:00" }
    ],
    "Gachibowli-Hitec City": [
        { from: "Gachibowli", to: "Hitec City", bus: "MSRTC 119", time: "15 mins", startTime: "06:00" }
    ],
    "Gachibowli-Dilsukhnagar": [
        { from: "Gachibowli", to: "Madhapur", bus: "TSRTC 210", time: "20 mins", startTime: "06:00" },
        { from: "Madhapur", to: "Dilsukhnagar", bus: "MSRTC 218", time: "50 mins", startTime: "06:20" }
    ],
    "Gachibowli-Charminar": [
        { from: "Gachibowli", to: "Madhapur", bus: "TSRTC 210", time: "20 mins", startTime: "06:00" },
        { from: "Madhapur", to: "Charminar", bus: "MSRTC 231", time: "50 mins", startTime: "06:20" }
    ],
    "Gachibowli-Begumpet": [
        { from: "Gachibowli", to: "Begumpet", bus: "TSRTC 505", time: "15 mins", startTime: "06:00" }
    ],
    "Gachibowli-Balanagar": [
        { from: "Gachibowli", to: "Begumpet", bus: "TSRTC 505", time: "15 mins", startTime: "06:00" },
        { from: "Begumpet", to: "Balanagar", bus: "MSRTC 502", time: "25 mins", startTime: "06:15" }
    ],
    "Banjara Hills-Sangareddy": [
        { from: "Banjara Hills", to: "Madhapur", bus: "TSRTC 245", time: "15 mins", startTime: "06:00" },
        { from: "Madhapur", to: "Sangareddy", bus: "MSRTC 249", time: "50 mins", startTime: "06:20" }
    ],
    "Banjara Hills-Bachupally": [
        { from: "Banjara Hills", to: "Madhapur", bus: "TSRTC 245", time: "15 mins", startTime: "06:00" },
        { from: "Madhapur", to: "Bachupally", bus: "TSRTC 249", time: "30 mins", startTime: "06:20" }
    ],
    "Banjara Hills-LB Nagar": [
        { from: "Banjara Hills", to: "Madhapur", bus: "TSRTC 245", time: "15 mins", startTime: "06:00" },
        { from: "Madhapur", to: "LB Nagar", bus: "MSRTC 135", time: "40 mins", startTime: "06:20" }
    ],
    "Banjara Hills-Uppal": [
        { from: "Banjara Hills", to: "Madhapur", bus: "TSRTC 245", time: "15 mins", startTime: "06:00" },
        { from: "Madhapur", to: "Uppal", bus: "MSRTC 212", time: "35 mins", startTime: "06:20" }
    ],
    "Banjara Hills-Kondapur": [
        { from: "Banjara Hills", to: "Madhapur", bus: "TSRTC 245", time: "15 mins", startTime: "06:00" },
        { from: "Madhapur", to: "Kondapur", bus: "MSRTC 182", time: "30 mins", startTime: "06:20" }
    ],
    "Banjara Hills-KPHB": [
        { from: "Banjara Hills", to: "KPHB", bus: "TSRTC 110", time: "20 mins", startTime: "06:00" }
    ],
    "Banjara Hills-Gachibowli": [
        { from: "Banjara Hills", to: "Madhapur", bus: "TSRTC 245", time: "15 mins", startTime: "06:00" },
        { from: "Madhapur", to: "Gachibowli", bus: "TSRTC 242", time: "20 mins", startTime: "06:15" }
    ],
    "Banjara Hills-Jubilee Hills": [
        { from: "Banjara Hills", to: "Jubilee Hills", bus: "MSRTC 211", time: "10 mins", startTime: "06:00" }
    ],
    "Banjara Hills-Secunderabad": [
        { from: "Banjara Hills", to: "Madhapur", bus: "TSRTC 245", time: "15 mins", startTime: "06:00" },
        { from: "Madhapur", to: "Secunderabad", bus: "MSRTC 301", time: "40 mins", startTime: "06:20" }
    ],
    "Banjara Hills-Madhapur": [
        { from: "Banjara Hills", to: "Madhapur", bus: "TSRTC 245", time: "15 mins", startTime: "06:00" }
    ],
    "Banjara Hills-Hitec City": [
        { from: "Banjara Hills", to: "Hitec City", bus: "MSRTC 119", time: "15 mins", startTime: "06:00" }
    ],
    "Banjara Hills-Dilsukhnagar": [
        { from: "Banjara Hills", to: "Madhapur", bus: "TSRTC 245", time: "15 mins", startTime: "06:00" },
        { from: "Madhapur", to: "Dilsukhnagar", bus: "MSRTC 218", time: "50 mins", startTime: "06:20" }
    ],
    "Banjara Hills-Charminar": [
        { from: "Banjara Hills", to: "Madhapur", bus: "TSRTC 245", time: "15 mins", startTime: "06:00" },
        { from: "Madhapur", to: "Charminar", bus: "MSRTC 231", time: "50 mins", startTime: "06:20" }
    ],
    "Banjara Hills-Begumpet": [
        { from: "Banjara Hills", to: "Begumpet", bus: "TSRTC 505", time: "20 mins", startTime: "06:00" }
    ],
    "Banjara Hills-Balanagar": [
        { from: "Banjara Hills", to: "Begumpet", bus: "TSRTC 505", time: "20 mins", startTime: "06:00" },
        { from: "Begumpet", to: "Balanagar", bus: "MSRTC 502", time: "25 mins", startTime: "06:20" }
    ],
    "Secunderabad-Banjara Hills": [
        { from: "Secunderabad", to: "Madhapur", bus: "MSRTC 301", time: "40 mins", startTime: "06:00" },
        { from: "Madhapur", to: "Banjara Hills", bus: "TSRTC 245", time: "15 mins", startTime: "06:40" }
    ],
    "Secunderabad-Sangareddy": [
        { from: "Secunderabad", to: "Miyapur", bus: "MSRTC 118", time: "35 mins", startTime: "06:00" },
        { from: "Miyapur", to: "Sangareddy", bus: "Karnataka 402", time: "50 mins", startTime: "06:35" }
    ],
    "Secunderabad-Bachupally": [
        { from: "Secunderabad", to: "Miyapur", bus: "MSRTC 118", time: "35 mins", startTime: "06:00" },
        { from: "Miyapur", to: "Bachupally", bus: "Karnataka 502", time: "40 mins", startTime: "06:35" }
    ],
    "Secunderabad-LB Nagar": [
        { from: "Secunderabad", to: "Madhapur", bus: "MSRTC 301", time: "40 mins", startTime: "06:00" },
        { from: "Madhapur", to: "LB Nagar", bus: "TSRTC 135", time: "30 mins", startTime: "06:40" }
    ],
    "Secunderabad-Uppal": [
        { from: "Secunderabad", to: "Madhapur", bus: "MSRTC 301", time: "40 mins", startTime: "06:00" },
        { from: "Madhapur", to: "Uppal", bus: "TSRTC 510", time: "35 mins", startTime: "06:40" }
    ],
    "Secunderabad-Kondapur": [
        { from: "Secunderabad", to: "Madhapur", bus: "MSRTC 301", time: "40 mins", startTime: "06:00" },
        { from: "Madhapur", to: "Kondapur", bus: "TSRTC 478", time: "25 mins", startTime: "06:40" }
    ],
    "Secunderabad-Ameerpet": [
        { from: "Secunderabad", to: "Begumpet", bus: "TSRTC 205", time: "20 mins", startTime: "06:00" },
        { from: "Begumpet", to: "Ameerpet", bus: "Karnataka 214", time: "15 mins", startTime: "06:20" }
    ],
    "Secunderabad-KPHB": [
        { from: "Secunderabad", to: "Begumpet", bus: "TSRTC 205", time: "20 mins", startTime: "06:00" },
        { from: "Begumpet", to: "KPHB", bus: "Karnataka 302", time: "20 mins", startTime: "06:20" }
    ],
    "Secunderabad-Gachibowli": [
        { from: "Secunderabad", to: "Begumpet", bus: "TSRTC 205", time: "20 mins", startTime: "06:00" },
        { from: "Begumpet", to: "Gachibowli", bus: "Karnataka 501", time: "25 mins", startTime: "06:20" }
    ],
    "Secunderabad-Jubilee Hills": [
        { from: "Secunderabad", to: "Madhapur", bus: "MSRTC 301", time: "40 mins", startTime: "06:00" },
        { from: "Madhapur", to: "Jubilee Hills", bus: "TSRTC 517", time: "15 mins", startTime: "06:40" }
    ],
    "Secunderabad-Hitec City": [
        { from: "Secunderabad", to: "Madhapur", bus: "MSRTC 301", time: "40 mins", startTime: "06:00" },
        { from: "Madhapur", to: "Hitec City", bus: "TSRTC 242", time: "15 mins", startTime: "06:40" }
    ],
    "Secunderabad-Dilsukhnagar": [
        { from: "Secunderabad", to: "Madhapur", bus: "MSRTC 301", time: "40 mins", startTime: "06:00" },
        { from: "Madhapur", to: "Dilsukhnagar", bus: "MSRTC 218", time: "50 mins", startTime: "06:40" }
    ],
    "Secunderabad-Charminar": [
        { from: "Secunderabad", to: "Madhapur", bus: "MSRTC 301", time: "40 mins", startTime: "06:00" },
        { from: "Madhapur", to: "Charminar", bus: "MSRTC 231", time: "50 mins", startTime: "06:40" }
    ],
    "Secunderabad-Begumpet": [
        { from: "Secunderabad", to: "Begumpet", bus: "TSRTC 205", time: "20 mins", startTime: "06:00" }
    ],
    "Secunderabad-Balanagar": [
        { from: "Secunderabad", to: "Begumpet", bus: "TSRTC 205", time: "20 mins", startTime: "06:00" },
        { from: "Begumpet", to: "Balanagar", bus: "MSRTC 502", time: "25 mins", startTime: "06:20" }
    ],
    "Madhapur-Banjara Hills": [
        { from: "Madhapur", to: "Jubilee Hills", bus: "TSRTC 210", time: "20 mins", startTime: "06:00" },
        { from: "Jubilee Hills", to: "Banjara Hills", bus: "MSRTC 118", time: "15 mins", startTime: "06:20" }
    ],
    "Madhapur-Sangareddy": [
        { from: "Madhapur", to: "Miyapur", bus: "MSRTC 301", time: "40 mins", startTime: "06:00" },
        { from: "Miyapur", to: "Sangareddy", bus: "Karnataka 402", time: "50 mins", startTime: "06:40" }
    ],
    "Madhapur-Bachupally": [
        { from: "Madhapur", to: "Miyapur", bus: "MSRTC 301", time: "40 mins", startTime: "06:00" },
        { from: "Miyapur", to: "Bachupally", bus: "Karnataka 502", time: "40 mins", startTime: "06:40" }
    ],
    "Madhapur-LB Nagar": [
        { from: "Madhapur", to: "Begumpet", bus: "TSRTC 205", time: "20 mins", startTime: "06:00" },
        { from: "Begumpet", to: "LB Nagar", bus: "TSRTC 135", time: "30 mins", startTime: "06:20" }
    ],
    "Madhapur-Uppal": [
        { from: "Madhapur", to: "Begumpet", bus: "TSRTC 205", time: "20 mins", startTime: "06:00" },
        { from: "Begumpet", to: "Uppal", bus: "TSRTC 510", time: "35 mins", startTime: "06:20" }
    ],
    "Madhapur-Kondapur": [
        { from: "Madhapur", to: "Kondapur", bus: "MSRTC 406", time: "25 mins", startTime: "06:00" }
    ],
    "Madhapur-Ameerpet": [
        { from: "Madhapur", to: "Ameerpet", bus: "TSRTC 171", time: "20 mins", startTime: "06:00" }
    ],
    "Madhapur-KPHB": [
        { from: "Madhapur", to: "KPHB", bus: "TSRTC 206", time: "15 mins", startTime: "06:00" }
    ],
    "Madhapur-Gachibowli": [
        { from: "Madhapur", to: "Gachibowli", bus: "TSRTC 542", time: "10 mins", startTime: "06:00" }
    ],
    "Madhapur-Jubilee Hills": [
        { from: "Madhapur", to: "Jubilee Hills", bus: "TSRTC 210", time: "15 mins", startTime: "06:00" }
    ],
    "Madhapur-Hitec City": [
        { from: "Madhapur", to: "Hitec City", bus: "TSRTC 242", time: "15 mins", startTime: "06:00" }
    ],
    "Madhapur-Dilsukhnagar": [
        { from: "Madhapur", to: "Dilsukhnagar", bus: "MSRTC 218", time: "50 mins", startTime: "06:00" }
    ],
    "Madhapur-Charminar": [
        { from: "Madhapur", to: "Charminar", bus: "MSRTC 231", time: "50 mins", startTime: "06:00" }
    ],
    "Madhapur-Begumpet": [
        { from: "Madhapur", to: "Begumpet", bus: "TSRTC 205", time: "20 mins", startTime: "06:00" }
    ],
    "Madhapur-Balanagar": [
        { from: "Madhapur", to: "Begumpet", bus: "TSRTC 205", time: "20 mins", startTime: "06:00" },
        { from: "Begumpet", to: "Balanagar", bus: "MSRTC 502", time: "25 mins", startTime: "06:20" }
    ],
    "Hitec City-Banjara Hills": [
        { from: "Hitec City", to: "Madhapur", bus: "TSRTC 242", time: "10 mins", startTime: "06:00" },
        { from: "Madhapur", to: "Banjara Hills", bus: "MSRTC 312", time: "20 mins", startTime: "06:10" }
    ],
    "Hitec City-Sangareddy": [
        { from: "Hitec City", to: "Madhapur", bus: "TSRTC 242", time: "10 mins", startTime: "06:00" },
        { from: "Madhapur", to: "Sangareddy", bus: "Karnataka 402", time: "50 mins", startTime: "06:10" }
    ],
    "Hitec City-Bachupally": [
        { from: "Hitec City", to: "Madhapur", bus: "TSRTC 242", time: "10 mins", startTime: "06:00" },
        { from: "Madhapur", to: "Bachupally", bus: "Karnataka 502", time: "40 mins", startTime: "06:10" }
    ],
    "Hitec City-LB Nagar": [
        { from: "Hitec City", to: "Madhapur", bus: "TSRTC 242", time: "10 mins", startTime: "06:00" },
        { from: "Madhapur", to: "LB Nagar", bus: "TSRTC 135", time: "30 mins", startTime: "06:10" }
    ],
    "Hitec City-Uppal": [
        { from: "Hitec City", to: "Madhapur", bus: "TSRTC 242", time: "10 mins", startTime: "06:00" },
        { from: "Madhapur", to: "Uppal", bus: "TSRTC 510", time: "35 mins", startTime: "06:10" }
    ],
    "Hitec City-Kondapur": [
        { from: "Hitec City", to: "Kondapur", bus: "MSRTC 406", time: "10 mins", startTime: "06:00" }
    ],
    "Hitec City-Ameerpet": [
        { from: "Hitec City", to: "Ameerpet", bus: "TSRTC 171", time: "15 mins", startTime: "06:00" }
    ],
    "Hitec City-KPHB": [
        { from: "Hitec City", to: "KPHB", bus: "TSRTC 206", time: "15 mins", startTime: "06:00" }
    ],
    "Hitec City-Gachibowli": [
        { from: "Hitec City", to: "Gachibowli", bus: "TSRTC 542", time: "10 mins", startTime: "06:00" }
    ],
    "Hitec City-Jubilee Hills": [
        { from: "Hitec City", to: "Madhapur", bus: "TSRTC 242", time: "10 mins", startTime: "06:00" },
        { from: "Madhapur", to: "Jubilee Hills", bus: "TSRTC 210", time: "20 mins", startTime: "06:10" }
    ],
    "Hitec City-Dilsukhnagar": [
        { from: "Hitec City", to: "Madhapur", bus: "TSRTC 242", time: "10 mins", startTime: "06:00" },
        { from: "Madhapur", to: "Dilsukhnagar", bus: "MSRTC 218", time: "50 mins", startTime: "06:10" }
    ],
    "Hitec City-Charminar": [
        { from: "Hitec City", to: "Madhapur", bus: "TSRTC 242", time: "10 mins", startTime: "06:00" },
        { from: "Madhapur", to: "Charminar", bus: "MSRTC 231", time: "50 mins", startTime: "06:10" }
    ],
    "Hitec City-Begumpet": [
        { from: "Hitec City", to: "Madhapur", bus: "TSRTC 242", time: "10 mins", startTime: "06:00" },
        { from: "Madhapur", to: "Begumpet", bus: "TSRTC 205", time: "20 mins", startTime: "06:10" }
    ],
    "Hitec City-Balanagar": [
        { from: "Hitec City", to: "Madhapur", bus: "TSRTC 242", time: "10 mins", startTime: "06:00" },
        { from: "Madhapur", to: "Begumpet", bus: "TSRTC 205", time: "20 mins", startTime: "06:10" },
        { from: "Begumpet", to: "Balanagar", bus: "MSRTC 502", time: "25 mins", startTime: "06:30" }
    ],
    "Dilsukhnagar-Banjara Hills": [
        { from: "Dilsukhnagar", to: "LB Nagar", bus: "TSRTC 36", time: "15 mins", startTime: "06:00" },
        { from: "LB Nagar", to: "Banjara Hills", bus: "MSRTC 312", time: "30 mins", startTime: "06:15" }
    ],
    "Dilsukhnagar-Sangareddy": [
        { from: "Dilsukhnagar", to: "LB Nagar", bus: "TSRTC 36", time: "15 mins", startTime: "06:00" },
        { from: "LB Nagar", to: "Sangareddy", bus: "Karnataka 402", time: "50 mins", startTime: "06:15" }
    ],
    "Dilsukhnagar-Bachupally": [
        { from: "Dilsukhnagar", to: "LB Nagar", bus: "TSRTC 36", time: "15 mins", startTime: "06:00" },
        { from: "LB Nagar", to: "Bachupally", bus: "MSRTC 522", time: "40 mins", startTime: "06:15" }
    ],
    "Dilsukhnagar-LB Nagar": [
        { from: "Dilsukhnagar", to: "LB Nagar", bus: "TSRTC 36", time: "15 mins", startTime: "06:00" }
    ],
    "Dilsukhnagar-Uppal": [
        { from: "Dilsukhnagar", to: "LB Nagar", bus: "TSRTC 36", time: "15 mins", startTime: "06:00" },
        { from: "LB Nagar", to: "Uppal", bus: "TSRTC 540", time: "30 mins", startTime: "06:15" }
    ],
    "Dilsukhnagar-Kondapur": [
        { from: "Dilsukhnagar", to: "LB Nagar", bus: "TSRTC 36", time: "15 mins", startTime: "06:00" },
        { from: "LB Nagar", to: "Kondapur", bus: "Karnataka 506", time: "45 mins", startTime: "06:15" }
    ],
    "Dilsukhnagar-Ameerpet": [
        { from: "Dilsukhnagar", to: "LB Nagar", bus: "TSRTC 36", time: "15 mins", startTime: "06:00" },
        { from: "LB Nagar", to: "Ameerpet", bus: "TSRTC 171", time: "20 mins", startTime: "06:15" }
    ],
    "Dilsukhnagar-KPHB": [
        { from: "Dilsukhnagar", to: "LB Nagar", bus: "TSRTC 36", time: "15 mins", startTime: "06:00" },
        { from: "LB Nagar", to: "KPHB", bus: "MSRTC 252", time: "30 mins", startTime: "06:15" }
    ],
    "Dilsukhnagar-Gachibowli": [
        { from: "Dilsukhnagar", to: "LB Nagar", bus: "TSRTC 36", time: "15 mins", startTime: "06:00" },
        { from: "LB Nagar", to: "Gachibowli", bus: "TSRTC 542", time: "40 mins", startTime: "06:15" }
    ],
    "Dilsukhnagar-Jubilee Hills": [
        { from: "Dilsukhnagar", to: "LB Nagar", bus: "TSRTC 36", time: "15 mins", startTime: "06:00" },
        { from: "LB Nagar", to: "Jubilee Hills", bus: "MSRTC 312", time: "35 mins", startTime: "06:15" }
    ],
    "Dilsukhnagar-Charminar": [
        { from: "Dilsukhnagar", to: "LB Nagar", bus: "TSRTC 36", time: "15 mins", startTime: "06:00" },
        { from: "LB Nagar", to: "Charminar", bus: "MSRTC 102", time: "35 mins", startTime: "06:15" }
    ],
    "Dilsukhnagar-Begumpet": [
        { from: "Dilsukhnagar", to: "LB Nagar", bus: "TSRTC 36", time: "15 mins", startTime: "06:00" },
        { from: "LB Nagar", to: "Begumpet", bus: "TSRTC 205", time: "20 mins", startTime: "06:15" }
    ],
    "Dilsukhnagar-Balanagar": [
        { from: "Dilsukhnagar", to: "LB Nagar", bus: "TSRTC 36", time: "15 mins", startTime: "06:00" },
        { from: "LB Nagar", to: "Begumpet", bus: "TSRTC 205", time: "20 mins", startTime: "06:15" },
        { from: "Begumpet", to: "Balanagar", bus: "MSRTC 502", time: "25 mins", startTime: "06:30" }
    ],
    "Charminar-Banjara Hills": [
        { from: "Charminar", to: "Mettuguda", bus: "TSRTC 32", time: "30 mins", startTime: "06:00" },
        { from: "Mettuguda", to: "Banjara Hills", bus: "MSRTC 47", time: "35 mins", startTime: "06:30" }
    ],
    "Charminar-Sangareddy": [
        { from: "Charminar", to: "Mettuguda", bus: "TSRTC 32", time: "30 mins", startTime: "06:00" },
        { from: "Mettuguda", to: "Sangareddy", bus: "Karnataka 406", time: "50 mins", startTime: "06:30" }
    ],
    "Charminar-Bachupally": [
        { from: "Charminar", to: "Mettuguda", bus: "TSRTC 32", time: "30 mins", startTime: "06:00" },
        { from: "Mettuguda", to: "Bachupally", bus: "MSRTC 522", time: "40 mins", startTime: "06:30" }
    ],
    "Charminar-LB Nagar": [
        { from: "Charminar", to: "Mettuguda", bus: "TSRTC 32", time: "30 mins", startTime: "06:00" },
        { from: "Mettuguda", to: "LB Nagar", bus: "MSRTC 181", time: "20 mins", startTime: "06:30" }
    ],
    "Charminar-Uppal": [
        { from: "Charminar", to: "Mettuguda", bus: "TSRTC 32", time: "30 mins", startTime: "06:00" },
        { from: "Mettuguda", to: "Uppal", bus: "TSRTC 540", time: "30 mins", startTime: "06:30" }
    ],
    "Charminar-Kondapur": [
        { from: "Charminar", to: "Mettuguda", bus: "TSRTC 32", time: "30 mins", startTime: "06:00" },
        { from: "Mettuguda", to: "Kondapur", bus: "Karnataka 505", time: "45 mins", startTime: "06:30" }
    ],
    "Charminar-Ameerpet": [
        { from: "Charminar", to: "Mettuguda", bus: "TSRTC 32", time: "30 mins", startTime: "06:00" },
        { from: "Mettuguda", to: "Ameerpet", bus: "TSRTC 171", time: "20 mins", startTime: "06:30" }
    ],
    "Charminar-KPHB": [
        { from: "Charminar", to: "Mettuguda", bus: "TSRTC 32", time: "30 mins", startTime: "06:00" },
        { from: "Mettuguda", to: "KPHB", bus: "MSRTC 252", time: "30 mins", startTime: "06:30" }
    ],
    "Charminar-Gachibowli": [
        { from: "Charminar", to: "Mettuguda", bus: "TSRTC 32", time: "30 mins", startTime: "06:00" },
        { from: "Mettuguda", to: "Gachibowli", bus: "TSRTC 542", time: "40 mins", startTime: "06:30" }
    ],
    "Charminar-Jubilee Hills": [
        { from: "Charminar", to: "Mettuguda", bus: "TSRTC 32", time: "30 mins", startTime: "06:00" },
        { from: "Mettuguda", to: "Jubilee Hills", bus: "MSRTC 312", time: "35 mins", startTime: "06:30" }
    ],
    "Charminar-Dilsukhnagar": [
        { from: "Charminar", to: "Mettuguda", bus: "TSRTC 32", time: "30 mins", startTime: "06:00" },
        { from: "Mettuguda", to: "Dilsukhnagar", bus: "MSRTC 176", time: "35 mins", startTime: "06:30" }
    ],
    "Charminar-Begumpet": [
        { from: "Charminar", to: "Mettuguda", bus: "TSRTC 32", time: "30 mins", startTime: "06:00" },
        { from: "Mettuguda", to: "Begumpet", bus: "TSRTC 205", time: "20 mins", startTime: "06:30" }
    ],
    "Charminar-Balanagar": [
        { from: "Charminar", to: "Mettuguda", bus: "TSRTC 32", time: "30 mins", startTime: "06:00" },
        { from: "Mettuguda", to: "Begumpet", bus: "TSRTC 205", time: "20 mins", startTime: "06:30" },
        { from: "Begumpet", to: "Balanagar", bus: "MSRTC 502", time: "25 mins", startTime: "06:50" }
    ],
    "Begumpet-Banjara Hills": [
        { from: "Begumpet", to: "Ameerpet", bus: "TSRTC 171", time: "15 mins", startTime: "06:00" },
        { from: "Ameerpet", to: "Banjara Hills", bus: "TSRTC 190", time: "20 mins", startTime: "06:20" }
    ],
    "Begumpet-Sangareddy": [
        { from: "Begumpet", to: "Ameerpet", bus: "TSRTC 171", time: "15 mins", startTime: "06:00" },
        { from: "Ameerpet", to: "Sangareddy", bus: "Karnataka 406", time: "40 mins", startTime: "06:20" }
    ],
    "Begumpet-Bachupally": [
        { from: "Begumpet", to: "Ameerpet", bus: "TSRTC 171", time: "15 mins", startTime: "06:00" },
        { from: "Ameerpet", to: "Bachupally", bus: "MSRTC 522", time: "30 mins", startTime: "06:20" }
    ],
    "Begumpet-LB Nagar": [
        { from: "Begumpet", to: "Ameerpet", bus: "TSRTC 171", time: "15 mins", startTime: "06:00" },
        { from: "Ameerpet", to: "LB Nagar", bus: "TSRTC 180", time: "25 mins", startTime: "06:20" }
    ],
    "Begumpet-Uppal": [
        { from: "Begumpet", to: "Ameerpet", bus: "TSRTC 171", time: "15 mins", startTime: "06:00" },
        { from: "Ameerpet", to: "Uppal", bus: "MSRTC 540", time: "30 mins", startTime: "06:20" }
    ],
    "Begumpet-Kondapur": [
        { from: "Begumpet", to: "Ameerpet", bus: "TSRTC 171", time: "15 mins", startTime: "06:00" },
        { from: "Ameerpet", to: "Kondapur", bus: "MSRTC 252", time: "30 mins", startTime: "06:20" }
    ],
    "Begumpet-Ameerpet": [
        { from: "Begumpet", to: "Ameerpet", bus: "TSRTC 171", time: "15 mins", startTime: "06:00" }
    ],
    "Begumpet-KPHB": [
        { from: "Begumpet", to: "Ameerpet", bus: "TSRTC 171", time: "15 mins", startTime: "06:00" },
        { from: "Ameerpet", to: "KPHB", bus: "TSRTC 252", time: "25 mins", startTime: "06:20" }
    ],
    "Begumpet-Gachibowli": [
        { from: "Begumpet", to: "Ameerpet", bus: "TSRTC 171", time: "15 mins", startTime: "06:00" },
        { from: "Ameerpet", to: "Gachibowli", bus: "MSRTC 542", time: "35 mins", startTime: "06:20" }
    ],
    "Begumpet-Jubilee Hills": [
        { from: "Begumpet", to: "Ameerpet", bus: "TSRTC 171", time: "15 mins", startTime: "06:00" },
        { from: "Ameerpet", to: "Jubilee Hills", bus: "MSRTC 312", time: "30 mins", startTime: "06:20" }
    ],
    "Begumpet-Dilsukhnagar": [
        { from: "Begumpet", to: "Ameerpet", bus: "TSRTC 171", time: "15 mins", startTime: "06:00" },
        { from: "Ameerpet", to: "Dilsukhnagar", bus: "MSRTC 176", time: "25 mins", startTime: "06:20" }
    ],
    "Begumpet-Charminar": [
        { from: "Begumpet", to: "Ameerpet", bus: "TSRTC 171", time: "15 mins", startTime: "06:00" },
        { from: "Ameerpet", to: "Charminar", bus: "TSRTC 32", time: "30 mins", startTime: "06:20" }
    ],
    "Begumpet-Balanagar": [
        { from: "Begumpet", to: "Ameerpet", bus: "TSRTC 171", time: "15 mins", startTime: "06:00" },
        { from: "Ameerpet", to: "Balanagar", bus: "MSRTC 502", time: "25 mins", startTime: "06:20" }
    ],
    "Balanagar-Sangareddy": [
        { from: "Balanagar", to: "Begumpet", bus: "MSRTC 541", time: "20 mins", startTime: "06:00" },
        { from: "Begumpet", to: "Sangareddy", bus: "TSRTC 120", time: "1 hr 5 mins", startTime: "06:30" }
    ],
    "Balanagar-Bachupally": [
        { from: "Balanagar", to: "Begumpet", bus: "MSRTC 541", time: "20 mins", startTime: "06:00" },
        { from: "Begumpet", to: "Miyapur", bus: "KSRTC 178", time: "25 mins", startTime: "06:30" },
        { from: "Miyapur", to: "Bachupally", bus: "TSRTC 249", time: "30 mins", startTime: "07:00" }
    ],
    "Balanagar-LB Nagar": [
        { from: "Balanagar", to: "Begumpet", bus: "MSRTC 541", time: "20 mins", startTime: "06:00" },
        { from: "Begumpet", to: "Miyapur", bus: "KSRTC 178", time: "25 mins", startTime: "06:30" },
        { from: "Miyapur", to: "LB Nagar", bus: "TSRTC 249", time: "35 mins", startTime: "07:00" }
    ],
    "Balanagar-Uppal": [
        { from: "Balanagar", to: "Begumpet", bus: "MSRTC 541", time: "20 mins", startTime: "06:00" },
        { from: "Begumpet", to: "Secunderabad", bus: "Karnataka Bus 348", time: "15 mins", startTime: "06:30" },
        { from: "Secunderabad", to: "Uppal", bus: "TSRTC 290", time: "30 mins", startTime: "07:00" }
    ],
    "Balanagar-Kondapur": [
        { from: "Balanagar", to: "Begumpet", bus: "MSRTC 541", time: "20 mins", startTime: "06:00" },
        { from: "Begumpet", to: "Ameerpet", bus: "MSRTC 180", time: "25 mins", startTime: "06:30" },
        { from: "Ameerpet", to: "Kondapur", bus: "TSRTC 163", time: "20 mins", startTime: "07:00" }
    ],
    "Balanagar-Ameerpet": [
        { from: "Balanagar", to: "Begumpet", bus: "MSRTC 541", time: "20 mins", startTime: "06:00" },
        { from: "Begumpet", to: "Ameerpet", bus: "KSRTC 178", time: "30 mins", startTime: "06:30" }
    ],
    "Balanagar-KPHB": [
        { from: "Balanagar", to: "Begumpet", bus: "MSRTC 541", time: "20 mins", startTime: "06:00" },
        { from: "Begumpet", to: "Miyapur", bus: "Karnataka Bus 178", time: "25 mins", startTime: "06:30" },
        { from: "Miyapur", to: "KPHB", bus: "TSRTC 249", time: "35 mins", startTime: "07:00" }
    ],
    "Balanagar-Gachibowli": [
        { from: "Balanagar", to: "Begumpet", bus: "MSRTC 541", time: "20 mins", startTime: "06:00" },
        { from: "Begumpet", to: "Ameerpet", bus: "Karnataka Bus 175", time: "30 mins", startTime: "06:30" },
        { from: "Ameerpet", to: "Gachibowli", bus: "TSRTC 163", time: "40 mins", startTime: "07:00" }
    ],
    "Balanagar-Banjara Hills": [
        { from: "Balanagar", to: "Begumpet", bus: "MSRTC 541", time: "20 mins", startTime: "06:00" },
        { from: "Begumpet", to: "Madhapur", bus: "Karnataka Bus 56", time: "35 mins", startTime: "06:30" },
        { from: "Madhapur", to: "Banjara Hills", bus: "TSRTC 212", time: "15 mins", startTime: "07:00" }
    ],
    "Balanagar-Jubilee Hills": [
        { from: "Balanagar", to: "Begumpet", bus: "MSRTC 541", time: "20 mins", startTime: "06:00" },
        { from: "Begumpet", to: "Madhapur", bus: "TSRTC 251", time: "30 mins", startTime: "06:30" },
        { from: "Madhapur", to: "Jubilee Hills", bus: "TSRTC 245", time: "15 mins", startTime: "07:00" }
    ],
    "Balanagar-Secunderabad": [
        { from: "Balanagar", to: "Begumpet", bus: "MSRTC 541", time: "20 mins", startTime: "06:00" },
        { from: "Begumpet", to: "Secunderabad", bus: "KSRTC 268", time: "15 mins", startTime: "06:30" }
    ],
    "Balanagar-Madhapur": [
        { from: "Balanagar", to: "Begumpet", bus: "MSRTC 541", time: "20 mins", startTime: "06:00" },
        { from: "Begumpet", to: "Madhapur", bus: "Karnataka Bus 58", time: "30 mins", startTime: "06:30" }
    ],
    "Balanagar-Hitec City": [
        { from: "Balanagar", to: "Begumpet", bus: "MSRTC 541", time: "20 mins", startTime: "06:00" },
        { from: "Begumpet", to: "Madhapur", bus: "Karnataka Bus 56", time: "35 mins", startTime: "06:30" },
        { from: "Madhapur", to: "Hitec City", bus: "TSRTC 208", time: "10 mins", startTime: "07:00" }
    ],
    "Balanagar-Dilsukhnagar": [
        { from: "Balanagar", to: "Begumpet", bus: "MSRTC 541", time: "20 mins", startTime: "06:00" },
        { from: "Begumpet", to: "Secunderabad", bus: "Karnataka Bus 268", time: "15 mins", startTime: "06:30" },
        { from: "Secunderabad", to: "Dilsukhnagar", bus: "TSRTC 228", time: "45 mins", startTime: "07:00" }
    ],
    "Balanagar-Charminar": [
        { from: "Balanagar", to: "Begumpet", bus: "MSRTC 541", time: "20 mins", startTime: "06:00" },
        { from: "Begumpet", to: "Dilsukhnagar", bus: "TSRTC 228", time: "40 mins", startTime: "06:30" },
        { from: "Dilsukhnagar", to: "Charminar", bus: "TSRTC 140", time: "20 mins", startTime: "07:10" }
    ],
    "Balanagar-Begumpet": [
        { from: "Balanagar", to: "Begumpet", bus: "MSRTC 541", time: "20 mins", startTime: "06:00" }
    ]
};




function showRoute() {
    const fromCity = document.getElementById("from").value.trim();
    const toCity = document.getElementById("to").value.trim();
    const key = fromCity + '-' + toCity;

    const routeDetails = document.getElementById("route-details");
    routeDetails.innerHTML = ""; // Clear previous results

    if (routes[key]) {
        routes[key].forEach(function(route) {
            const row = document.createElement("tr");
            const fromCell = document.createElement("td");
            const toCell = document.createElement("td");
            const busCell = document.createElement("td");
            const timeCell = document.createElement("td");
            const startTimeCell = document.createElement("td");

            // Fill the cells with route details
            fromCell.textContent = route.from;
            toCell.textContent = route.to;
            busCell.textContent = route.bus;
            timeCell.textContent = route.time;
            startTimeCell.textContent = route.startTime;

            row.appendChild(fromCell);
            row.appendChild(toCell);
            row.appendChild(busCell);
            row.appendChild(timeCell);
            row.appendChild(startTimeCell);

            routeDetails.appendChild(row);
        });
    } else {
        const row = document.createElement("tr");
        const noRouteCell = document.createElement("td");
        noRouteCell.colSpan = 5;
        noRouteCell.textContent = "No route available for the selected locations.";
        row.appendChild(noRouteCell);
        routeDetails.appendChild(row);
    }

    showMap(fromCity, toCity);
}

document.getElementById("route-form").addEventListener("submit", function(event) {
    event.preventDefault();
    showRoute();
});

function initMap() {
    const defaultCenter = { lat: 17.385044, lng: 78.486671 }; // Hyderabad coordinates
    const map = new google.maps.Map(document.getElementById("map"), {
        center: defaultCenter,
        zoom: 12
    });

    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);

    function showMap(fromCity, toCity) {
        const request = {
            origin: fromCity,
            destination: toCity,
            travelMode: 'TRANSIT'
        };

        directionsService.route(request, function(result, status) {
            if (status === 'OK') {
                directionsRenderer.setDirections(result);
            } else {
                alert('Error: ' + status);
            }
        });
    }

    showMap('Hyderabad', 'Hyderabad');
}

window.onload = initMap;
