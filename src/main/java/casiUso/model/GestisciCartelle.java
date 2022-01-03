package casiUso.model;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

import org.apache.tomcat.util.http.fileupload.FileUtils;

public class GestisciCartelle {
	
	public static String scriviCartella(String percorso, String nomeCartella) {
		
		String percorsoProgetto = System.getProperty("user.dir") + "/src/main/resources/static/" + percorso + "/" + nomeCartella;

	    File directory = new File(percorsoProgetto);
	   
	    if (! directory.exists()) 
	        if(directory.mkdir()) 
	        	return percorsoProgetto;
	       
	    return null;
	}
	
	public static void eliminaCartella(String percorso, String nomeCartella) {
		
		String p = System.getProperty("user.dir") + "/src/main/resources/static/" + percorso + "/" + nomeCartella;
		
		try {
			FileUtils.deleteDirectory(new File(p));
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
	
	
	public static void copiaFile(File sorgente, String destinazione) {
		
		try {
			Files.copy(Paths.get(sorgente.getPath()), 
					Paths.get(new File(destinazione + "/" + sorgente.getName()).getPath()), StandardCopyOption.REPLACE_EXISTING);
			
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
}
