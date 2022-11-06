import styles from "./App.module.css";

import { IWilder } from "./interfaces";
import WilderCard from "./components/WilderCard";
import AddWilderForm from "./components/1.AddWilderForm";
import AddSkillForm from "./components/AddSkillForm";
import { ApolloClient, ApolloProvider, InMemoryCache, useQuery } from "@apollo/client";
import { getWilders } from "./graphql/wildersQueries";

function Main() {
  const { loading, data, refetch } = useQuery<{ wilders: IWilder[] }>(
    getWilders
  );

  if (loading) return (<div>Loading...</div>);
  const wilders = data ? data.wilders : null;
  
  return (
    <div className={styles.App}>
      <header>
        <div className={styles.container}>
          <h1>Wilders Book</h1>
        </div>
      </header>
      <main className={styles.container}>
        <h2>Wilders</h2>
        
        <WilderCard wilders={wilders} />
        <AddWilderForm onWilderCreated={() => refetch()}/>
        <AddSkillForm onSkillCreated={() => refetch()} />
      </main>
      <footer>
        <div className={styles.container}>
          <p>&copy; 2022 Wild Code School</p>
        </div>
      </footer>
    </div>
  );
}

const client = new ApolloClient({
  uri: "http://localhost:5000",
  cache: new InMemoryCache(),
});

function App() {
  return (
    // <TestProvider>
      <ApolloProvider client={client}>
        <Main />
      </ApolloProvider>
    // </TestProvider>
  );
}


export default App;
