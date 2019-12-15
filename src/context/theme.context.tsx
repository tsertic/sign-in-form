import React, { Component, createContext } from 'react';
type MyProps = {
  children: React.ReactNode;
};
type ContextProps = {
  theme: string;
};
const ThemeContext = createContext({});

class ThemeProvider extends Component<MyProps, {}> {
  constructor(props: MyProps) {
    super(props);
    this.state = { isDarkMode: true };
  }
  render() {
    return (
      <ThemeContext.Provider value={{ ...this.state, tast: true }}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
export default ThemeProvider;
export { ThemeContext };
