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

public class DoencaSintomaDAO {

    public void addDoencaSintoma(DoencaSintoma doencaSintoma) throws SQLException {
        String sql = "INSERT INTO doenca_sintoma (id_doenca, id_sintoma) VALUES (?, ?)";
        try (Connection conn = ConexaoBancoDados.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setInt(1, doencaSintoma.getIdDoenca());
            stmt.setInt(2, doencaSintoma.getIdSintoma());
            stmt.executeUpdate();
        }
    }

    public List<DoencaSintoma> getAllDoencaSintoma() throws SQLException {
        String sql = "SELECT * FROM doenca_sintoma";
        try (Connection conn = ConexaoBancoDados.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {
            ResultSet rs = stmt.executeQuery();

            List<DoencaSintoma> doencaSintomas = new ArrayList<>();
            while (rs.next()) {
                DoencaSintoma doencaSintoma = new DoencaSintoma();
                doencaSintoma.setId(rs.getInt("id"));
                doencaSintoma.setIdDoenca(rs.getInt("id_doenca"));
                doencaSintoma.setIdSintoma(rs.getInt("id_sintoma"));
                doencaSintomas.add(doencaSintoma);
            }
            return doencaSintomas;
        }
    }

    public void deleteDoencaSintoma(int id) throws SQLException {
        String sql = "DELETE FROM doenca_sintoma WHERE id = ?";
        try (Connection conn = ConexaoBancoDados.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setInt(1, id);
            stmt.executeUpdate();
        }
    }
}

