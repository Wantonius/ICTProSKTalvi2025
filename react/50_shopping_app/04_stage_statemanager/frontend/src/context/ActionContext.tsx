import React from 'react';
import Action from '../types/Action';

interface DispatchInterface {
	dispatch:React.Dispatch<Action>;
}

const ActionContext = React.createContext<DispatchInterface>({
	dispatch:() => {}
});

ActionContext.displayName = "ActionContext";

export default ActionContext;