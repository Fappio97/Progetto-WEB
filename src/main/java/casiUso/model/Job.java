package casiUso.model;

import java.util.List;
import java.util.Objects;

public class Job {
	private String title;
	private String description;
	private String requirements;
	private List<Requirements> obligatory;
	private boolean active;
	
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Job() {
	}
	public boolean isActive() {
		return active;
	}
	public void setActive(boolean active) {
		this.active = active;
	}
	public Job(String title, String description, String requirements, List<Requirements> obligatory, boolean active) {
		super();
		this.title = title;
		this.description = description;
		this.requirements = requirements;
		this.setObligatory(obligatory);
		this.active = active;
	}
	@Override
	public int hashCode() {
		return Objects.hash(title);
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Job other = (Job) obj;
		return Objects.equals(title, other.title);
	}
	public String getRequirements() {
		return requirements;
	}
	public void setRequirements(String requirements) {
		this.requirements = requirements;
	}
	public boolean ugualiTotalmente(Job job) {
		// controllo se hanno entrambi gli stessi requisiti obbligatori
		// anche se posizionati in posti diversi
		int cont = 0;
//		System.out.println(this.obligatory.size());
		for(int i = 0; i < this.obligatory.size(); ++i) {
			for(int j = 0; j < job.getObligatory().size(); ++j) {
				if(this.obligatory.get(i).uguali(job.getObligatory().get(j))) {
//					System.out.println("qui");
					++cont;
				}
			}
		}
		
		if(cont < this.obligatory.size() || cont < job.getObligatory().size())
			return false;
		
		return this.title.equals(job.title) && this.description.equals(job.description) &&
				this.requirements.equals(job.requirements) && this.active == job.active;
	}
	public List<Requirements> getObligatory() {
		return obligatory;
	}
	public void setObligatory(List<Requirements> obligatory) {
		this.obligatory = obligatory;
	}
}
