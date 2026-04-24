package ca.wisp.studycorner.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class User {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private String _email;

  private String _username;
  private String _password;

  public User() {}

  public User(String username, String password, String email) {
    this._username = username;
    this._password = password;
    this._email = email;
  }

  public String getUsername() {
    return _username;
  }

  public void setUsername(String username) {
    this._username = username;
  }

  public String getPassword() {
    return _password;
  }

  public void setPassword(String password) {
    this._password = password;
  }

  public String getEmail() {
    return _email;
  }

  public void setEmail(String email) {
    this._email = email;
  }
}
