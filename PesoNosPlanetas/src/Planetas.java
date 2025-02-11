/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

/**
 *
 * @author Usuario
 */
import javax.swing.JOptionPane;
public class Planetas {
    
    double pesoPlaneta;
    
    public void Mercurio (double peso){
        pesoPlaneta = (peso/10)*0.37;
        JOptionPane.showMessageDialog(null,"SEU PESO EM EMRCURIO SERIA" + pesoPlaneta);
    }
    public void Venus (double peso){
        pesoPlaneta = (peso/10)*0.88;
        JOptionPane.showMessageDialog(null,"SEU PESO EM EMRCURIO SERIA" + pesoPlaneta);
    }
    public void Marte (double peso){
        pesoPlaneta = (peso/10)*0.38;
        JOptionPane.showMessageDialog(null,"SEU PESO EM EMRCURIO SERIA" + pesoPlaneta);
    }
    public void Jupter (double peso){
        pesoPlaneta = (peso/10)*2.64;
        JOptionPane.showMessageDialog(null,"SEU PESO EM EMRCURIO SERIA" + pesoPlaneta);
    }
    public void Saturno (double peso){
        pesoPlaneta = (peso/10)*1.15;
        JOptionPane.showMessageDialog(null,"SEU PESO EM EMRCURIO SERIA" + pesoPlaneta);
    }
    public void Urano (double peso){
        pesoPlaneta = (peso/10)*1.17;
        JOptionPane.showMessageDialog(null,"SEU PESO EM EMRCURIO SERIA" + pesoPlaneta);
    }
    
    
    
    
}
