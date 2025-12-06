
class AppState {
    static instance = null;

    view = 0;

    subscribers = [];

    constructor() {
        if (AppState.instance) {
            return AppState.instance;
        }

        AppState.instance = this;
    }

    getView() {
        return this.view;
    }

    setView(newView) {
        if (this.view === newView) return; 

        this.view = newView;
        this.notify(newView);
    }

    subscribe(fn) {
        this.subscribers.push(fn);
    }

    unsubscribe(fn) {
        this.subscribers = this.subscribers.filter(sub => sub !== fn);
    }

    notify(payload) {
        this.subscribers.forEach(fn => fn(payload));
    }
}


export const stateGlobal = new AppState();
