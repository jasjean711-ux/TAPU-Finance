'use strict';

class IdleSession {
    constructor(timeoutDuration, onTimeout) {
        this.timeoutDuration = timeoutDuration;
        this.onTimeout = onTimeout;
        this.resetTimeout();
        this.setupEventListeners();
    }

    setupEventListeners() {
        document.addEventListener('mousemove', () => this.resetTimeout());
        document.addEventListener('keydown', () => this.resetTimeout());
        document.addEventListener('scroll', () => this.resetTimeout());
    }

    resetTimeout() {
        clearTimeout(this.timeoutId);
        this.timeoutId = setTimeout(() => this.onTimeout(), this.timeoutDuration);
    }
}

// Example usage
const sessionTimeout = new IdleSession(300000, () => { // 5 minutes timeout
    alert('Session timed out due to inactivity.');
    // Add additional actions here, such as redirecting to login page
});