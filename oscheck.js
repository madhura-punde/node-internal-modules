const os = require('os');
// OS module provides operating system-related utility methods and properties.

// Returns a string identifying the operating system platform.
console.log("Platform: " + os.platform());
// Platform: darwin

//Returns the operating system CPU architecture.
console.log("Architecture: " + os.arch()); 
// Architecture: arm64

// Returns the total amount of system memory in bytes as an integer.
console.log("Total Memory:"+ os.totalmem());
// Total Memory:8589934592


// Returns a string identifying the kernel version.
console.log("Version: " + os.version());
// Version: Darwin Kernel Version 20.3.0: Thu Jan 21 00:06:51 PST 2021

// Returns the operating system as a string.
console.log("OS Release: " + os.release());
// OS Release: 20.3.0


//hostname
console.log("Hostname: " + os.hostname());
// Hostname: Madhuras-MacBook-Pro.local

//Network Interfaces
console.log("Network Interfaces: " + JSON.stringify(os.networkInterfaces()));
//Network details