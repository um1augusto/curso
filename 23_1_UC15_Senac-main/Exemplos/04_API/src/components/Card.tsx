import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RepositoryDTO } from "../types/repositories"; // Define o tipo do repositório

interface RepoCardProps {
  item: RepositoryDTO;
}

const RepoCard = ({ item }: RepoCardProps) => {
  return (
    <View style={styles.item}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.language}>{item.language || "Linguagem não definida"}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 15,
    backgroundColor: "#f9f9f9",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  language: {
    fontSize: 14,
    color: "#666",
  },
});

export default RepoCard;
