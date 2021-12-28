package casiUso.model;

import java.util.Objects;

public class Curriculum {
	private Long id;
	private Job job;
	private String first_name;
	private String last_name;
	private String date_birth;
	private String email;
	private String study_title;
	private String study_subject;
	private String last_function;
	private String last_classification;
	private String photo;
	private String curriculum;
	private String presentation;
	private String phone;
	
	public Curriculum(Job job, String first_name, String last_name, String date_birth, String email,
			String study_title, String study_subject, String last_function, String last_classification,
			String photo, String curriculum, String presentation, String phone) {
		super();
		this.id = (long) 0;
		this.job = job;
		this.first_name = first_name;
		this.last_name = last_name;
		this.date_birth = date_birth;
		this.email = email;
		this.study_title = study_title;
		this.study_subject = study_subject;
		this.last_function = last_function;
		this.last_classification = last_classification;
		this.photo = photo;
		this.curriculum = curriculum;
		this.presentation = presentation;
		this.phone = phone;
	}

	public Curriculum() {
		// TODO Auto-generated constructor stub
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Job getJob() {
		return job;
	}

	public void setJob(Job job) {
		this.job = job;
	}

	public String getFirst_name() {
		return first_name;
	}

	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}

	public String getLast_name() {
		return last_name;
	}

	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}

	public String getDate_birth() {
		return date_birth;
	}

	public void setDate_birth(String date_birth) {
		this.date_birth = date_birth;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getStudy_title() {
		return study_title;
	}

	public void setStudy_title(String study_title) {
		this.study_title = study_title;
	}

	public String getStudy_subject() {
		return study_subject;
	}

	public void setStudy_subject(String study_subject) {
		this.study_subject = study_subject;
	}

	public String getLast_function() {
		return last_function;
	}

	public void setLast_function(String last_function) {
		this.last_function = last_function;
	}

	public String getLast_classification() {
		return last_classification;
	}

	public void setLast_classification(String last_classification) {
		this.last_classification = last_classification;
	}

	public String getPhoto() {
		return photo;
	}

	public void setPhoto(String photo) {
		this.photo = photo;
	}

	public String getCurriculum() {
		return curriculum;
	}

	public void setCurriculum(String curriculum) {
		this.curriculum = curriculum;
	}

	public String getPresentation() {
		return presentation;
	}

	public void setPresentation(String presentation) {
		this.presentation = presentation;
	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Curriculum other = (Curriculum) obj;
		return Objects.equals(id, other.id);
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}
	
}
