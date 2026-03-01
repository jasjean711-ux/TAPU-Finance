'use strict';

// transaction-pin.js

// This module handles PIN-based backup authentication
// when biometric authentication fails.

class TransactionPin {
    constructor() {
        this.pin = null;
    }

    // Set the PIN
    setPin(pin) {
        this.pin = pin;
    }

    // Validate the PIN
    validatePin(inputPin) {
        return this.pin === inputPin;
    }

    // Generate a random PIN (for demo purposes)
    static generateRandomPin(length = 4) {
        let pin = '';
        for (let i = 0; i < length; i++) {
            pin += Math.floor(Math.random() * 10);
        }
        return pin;
    }
}

module.exports = TransactionPin;
