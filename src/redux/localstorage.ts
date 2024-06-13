// Load state from local storage


// Local storage key
const LOCAL_STORAGE_KEY = 'reduxState';
const loadState = (): any | undefined => {
    try {
      const serializedState = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      console.error("Could not load state from local storage", err);
      return undefined;
    }
  };
  
  // Save state to local storage
const saveState = (state: any): void => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem(LOCAL_STORAGE_KEY, serializedState);
    } catch (err) {
      console.error("Could not save state to local storage", err);
    }
  };

  export {loadState, saveState}