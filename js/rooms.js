var rooms = {
    "start": {
        "description": "You wake up from a dream, to find yourself in your room lying in bed. You have a urge to use the bathroom so you hop out of bed and walk <b>north</b> towards the bedroom door.",
    "directions":{
        "north": "bathroom",   
    },
    "objects":{
        "alarm clock":"The time is currently 3:30am",
        "tv": "Tv is currently off",
        "window": "The window is closed",
    }, 
},  "bathroom": {
        "description": "You arrive in your bathroom, to the <b>north</b> is the shower/tub ready for you whenever its time to be clean, towards the <b>west</b> is the toilet for when mothernature calls, and finally towards the <b>east</b> is the sink where you can look in the mirror to change your profile.",
    "directions":{
        "north": "shower/tub",
        "south": "start",
        "east": "sink",
        "west": "toilet",   
    },
},  "shower/tub": {
        "description": "You walk over to shower/tub, you begin running water do you want to take <b>shower</b> or <b>bath</b>?",
    "directions":{
        "north": "bathroom",
        "south": "bathroom",
        "east": "bathroom",
        "west": "bathroom",
    },    
    "commands":{
        "yes": "bathroom",
        "no":   "bathroom",
    },    
},  "toilet": {
        "description": "You walk over to toilet, do you want to use it <b>yes</b> or <b>no</b>?",
    "directions":{
        "north": "bathroom",
        "south": "bathroom",
        "east": "bathroom",
        "west": "bathroom",
    },    
    "commands":{
        "yes": "bathroom",
        "no":   "bathroom",
    }
},   "sink": {
        "description": "You walk over to sink, do you want to use <b>wash hands</b> or look in <b>mirror</b>?",
    "directions":{
        "north": "bathroom",
        "south": "bathroom",
        "east": "bathroom",
        "west": "bathroom",
    },    
    "commands":{
        "wash hands": "bathroom",
        "mirror":  "profile",
    }
}}