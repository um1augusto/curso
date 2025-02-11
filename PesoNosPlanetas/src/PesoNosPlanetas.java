

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

/**
 *
 * @author Usuario
 */

import javax.swing.JOptionPane;
public class PesoNosPlanetas {
        
    public static void main(String[] args) {
        double peso;
        String aux;
        int opcao;
        
        aux = JOptionPane.showInputDialog("Informe seu peso:");
        peso = Double.valueOf(aux);
        aux = JOptionPane.showInputDialog("DIGITE\n1-Mercurio\n2-Venus\n3-Marte\niJupter\n5-Saturn\n6-Urano");
        opcao = Integer.valueOf(aux);
        Planetas obj = new Planetas();
        
        switch (opcao){
            case 1:
                obj.Mercurio(peso);
                break;
            case 2:
                obj.Venus(peso);
                break;
            case 3:
                obj.Marte(peso);
                break; 
            case 4:
                obj.Jupter(peso);
                break;
            case 5:
                obj.Saturno(peso);
                break;
            case 6:
                obj.Urano(peso);
                break;
        }
    }
}
