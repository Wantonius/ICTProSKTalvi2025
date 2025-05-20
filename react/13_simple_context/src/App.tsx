import { useState } from 'react'
import ThemeContext,{themes} from './context/ThemeContext';
import Headline from './components/Headline';
import Paragraph from './components/Paragraph';
import ThemeButton from './components/ThemeButton';

interface State {
	theme:ThemeType;
}

interface ThemeType {
	color:string;
	backgroundColor:string;
}

function App() {
	const [state, setState] = useState<State>({
		theme:themes.dark
	})

	const toggleTheme = () => {
		if(state.theme === themes.dark) {
			setState({
				theme:themes.light
			})
		} else {
			setState({
				theme:themes.dark
			})
		}
	}

	return (
		<>
			<ThemeContext.Provider value={state.theme}>
				<Headline>
				createContext
				</Headline>
				<Paragraph>
				createContext returns a context object.

The context object itself does not hold any information. It represents which context other components read or provide. Typically, you will use SomeContext.Provider in components above to specify the context value, and call useContext(SomeContext) in components below to read it. 
				</Paragraph>
				<ThemeButton toggleTheme={toggleTheme}/>
			
			</ThemeContext.Provider>
		</>
	)
}

export default App
