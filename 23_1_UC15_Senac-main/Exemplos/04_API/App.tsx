import React, { useState } from "react";
import { View, TextInput, Button, FlatList, Text, StyleSheet } from "react-native";
import { fetchRepositories } from "./utils/api";
import RepoCard from "./components/RepoCard"; // Importa o componente de card

const App = () => {
  const [searchQuery, setSearchQuery] = useState(""); // Estado para o valor do input
  const [results, setResults] = useState([]); // Estado para os resultados da API
  const [loading, setLoading] = useState(false); // Estado para controlar o loading

  // Função que faz a requisição e salva o resultado
  const handleSearch = async () => {
    if (!searchQuery) return;
    setLoading(true);
    try {
      const repositories = await fetchRepositories(searchQuery); // Chama a função de requisição
      setResults(repositories);
    } catch (error) {
      console.log("Erro ao buscar dados:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {/* Input de busca */}
      <TextInput
        style={styles.input}
        placeholder="Digite o nome de usuário"
        value={searchQuery}
        onChangeText={setSearchQuery} // Atualiza o estado com o valor do input
      />
      {/* Botão para buscar */}
      <Button title="Buscar" onPress={handleSearch} />

      {/* Mostra o estado de carregamento */}
      {loading && <Text>Carregando...</Text>}

      {/* FlatList que exibe os resultados */}
      <FlatList
        data={results}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <RepoCard item={item} />} // Usa o componente RepoCard para renderizar os itens
      />
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
  },
});

export default App;
