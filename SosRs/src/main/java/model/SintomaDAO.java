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

public class SintomaDAO {

    public void addSintoma(Sintoma sintoma) throws SQLException {
        String sql = "INSERT INTO sintomas (sintoma) VALUES (?)";
        try (Connection conn = ConexaoBancoDados.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setString(1, sintoma.getSintoma());
            stmt.executeUpdate();
        }
    }

    public List<Sintoma> searchSintomasByName(String name) throws SQLException {
        String sql = "SELECT * FROM sintomas WHERE sintoma LIKE ?";
        try (Connection conn = ConexaoBancoDados.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setString(1, "%" + name + "%");
            ResultSet rs = stmt.executeQuery();

            List<Sintoma> sintomas = new ArrayList<>();
            while (rs.next()) {
                Sintoma sintoma = new Sintoma();
                sintoma.setId(rs.getInt("id_sintomas"));
                sintoma.setSintoma(rs.getString("sintoma"));
                sintomas.add(sintoma);
            }
            return sintomas;
        }
    }

    public void updateSintoma(Sintoma sintoma) throws SQLException {
        String sql = "UPDATE sintomas SET sintoma = ? WHERE id_sintomas = ?";
        try (Connection conn = ConexaoBancoDados.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setString(1, sintoma.getSintoma());
            stmt.setInt(2, sintoma.getId());
            stmt.executeUpdate();
        }
    }

    public void deleteSintoma(int id_sintomas) throws SQLException {
        String sql = "DELETE FROM sintomas WHERE id_sintomas = ?";
        try (Connection conn = ConexaoBancoDados.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setInt(1, id_sintomas);
            stmt.executeUpdate();
        }
    }

    public List<Sintoma> getAllSintomas() throws SQLException {
        String sql = "SELECT * FROM sintomas";
        try (Connection conn = ConexaoBancoDados.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {
            ResultSet rs = stmt.executeQuery();

            List<Sintoma> sintomas = new ArrayList<>();
            while (rs.next()) {
                Sintoma sintoma = new Sintoma();
                sintoma.setId(rs.getInt("id_sintomas"));
                sintoma.setSintoma(rs.getString("sintoma"));
                sintomas.add(sintoma);
            }
            return sintomas;
        }
    }
}

