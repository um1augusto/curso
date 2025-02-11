/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package model;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import util.ConexaoBancoDados;

public class DoencaDAO {

    public void addDoenca(Doenca doenca) throws SQLException {
        String sql = "INSERT INTO doencas (doenca) VALUES (?)";
        try (Connection conn = ConexaoBancoDados.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setString(1, doenca.getDoenca());
            stmt.executeUpdate();
        }
    }

    public List<Doenca> searchDoencasByName(String name) throws SQLException {
        String sql = "SELECT * FROM doencas WHERE doenca LIKE ?";
        try (Connection conn = ConexaoBancoDados.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setString(1, "%" + name + "%");
            ResultSet rs = stmt.executeQuery();

            List<Doenca> doencas = new ArrayList<>();
            while (rs.next()) {
                Doenca doenca = new Doenca();
                doenca.setId(rs.getInt("id_doencas"));
                doenca.setDoenca(rs.getString("doenca"));
                doencas.add(doenca);
            }
            return doencas;
        }
    }

    public void updateDoenca(Doenca doenca) throws SQLException {
        String sql = "UPDATE doencas SET doenca = ? WHERE id_doencas = ?";
        try (Connection conn = ConexaoBancoDados.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setString(1, doenca.getDoenca());
            stmt.setInt(2, doenca.getId());
            stmt.executeUpdate();
        }
    }

    public void deleteDoenca(int id_doencas) throws SQLException {
        String sql = "DELETE FROM doencas WHERE id_doencas = ?";
        try (Connection conn = ConexaoBancoDados.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setInt(1, id_doencas);
            stmt.executeUpdate();
        }
    }

    public List<Doenca> getAllDoencas() throws SQLException {
        String sql = "SELECT * FROM doencas";
        try (Connection conn = ConexaoBancoDados.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {
            ResultSet rs = stmt.executeQuery();

            List<Doenca> doencas = new ArrayList<>();
            while (rs.next()) {
                Doenca doenca = new Doenca();
                doenca.setId(rs.getInt("id_doencas"));
                doenca.setDoenca(rs.getString("doenca"));
                doencas.add(doenca);
            }
            return doencas;
        }
    }
    
    public Doenca getDoencaById(int id_doenca) throws SQLException {
    String sql = "SELECT * FROM doencas WHERE id_doencas = ?";
    try (Connection conn = ConexaoBancoDados.getConnection();
         PreparedStatement stmt = conn.prepareStatement(sql)) {
        stmt.setInt(1, id_doenca);
        ResultSet rs = stmt.executeQuery();

        if (rs.next()) {
            Doenca doenca = new Doenca();
            doenca.setId(rs.getInt("id_doencas"));
            doenca.setDoenca(rs.getString("doenca"));
            return doenca;
        } else {
            throw new SQLException("Doença não encontrada com o ID: " + id_doenca);
        }
    }
}

}


