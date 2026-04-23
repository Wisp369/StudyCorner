package ca.wisp.studycorner.model;

import jakarta.persistence.Entity;

@Entity
public class User {

  private String _username;
  private String _password;
  private String _email;

  public User() {}

  public User(String username, String password, String email) {
    this._username = username;
    this._password = password;
    this._email = email;
  }

  public String get_username() {
    return _username;
  }

  public void set_username(String username) {
    this._username = username;
  }

  public String get_password() {
    return _password;
  }

  public void set_password(String password) {
    this._password = password;
  }

  public String get_email() {
    return _email;
  }

  public void set_email(String email) {
    this._email = email;
  }
}
