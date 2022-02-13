import './App.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Tasks from "./Tasks";
import TodoInput from "./TodoInput";

function App() {

  const client = new ApolloClient({
    uri: "https://positivecovide-stagmotor-8899.hasurakarta.app/v1/graphql",
    headers: {
      'x-hasura-admin-secret': 'WnwYePisangI5fo0e4MTNq03Ro9yMwCBrCg6Y5IdTerigurvLS7Z0WGVQHoLMFjlFs3Js4K19I'
  },
    cache: new InMemoryCache(),
  });
  
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-headers">
          <p>ToDo App</p>
        </header>
        <br />
        <TodoInput />
        <Tasks />
      </div>
    </ApolloProvider>
  );
}

export default App;