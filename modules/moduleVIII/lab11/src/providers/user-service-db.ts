import { Injectable } from '@angular/core';
import { SQLite } from 'ionic-native';
import {User} from '../model/user';

/*
  Generated class for the UserServiceDb provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UserServiceDb {
db: SQLite;
  constructor() {
  	this.db = new SQLite();
  }

  openDatabase(){
    return this.db.openDatabase({
      name: 'data.db',
      location: 'default'
    });
  }

  createTable(){
    let sql = 'CREATE TABLE IF NOT EXISTS user(' +
        'id INTEGER PRIMARY KEY AUTOINCREMENT, ' +
        'firstname TEXT, ' +
        'lastname TEXT, ' +
        'phone INTEGER, ' +
        'email TEXT, '+
        'password TEXT, '+
        'url TEXT, ' +
        'sync BOOLEAN)';
    return this.db.executeSql(sql, []);
  }

  getAll(){
    let query = 'SELECT * FROM user;';
    return this.db.executeSql(query, [])
      .then(response => {
        let users = [];
        for (let index = 0; index < response.rows.length; index++) {
          users.push(response.rows.item(index));
        }
        return Promise.resolve(users);
      })
  }

  getUser(id:number){
  	//console.log('nombre en el query antes: ' + id );
    let query = 'SELECT * FROM user where id = ?;';

    return this.db.executeSql(query, [id]).then(user => {
    	console.log('nombre en el query: ' + user );
    	return Promise.resolve(user.rows.item(0));
    	})
  }

  create(user: User){
    let query = 'INSERT INTO user(firstname, lastname, phone, email, password, url, sync) VALUES(?,?,?,?,?,?,?)';
    return this.db.executeSql(query, [user.firstname, user.lastname, user.phone, user.email, user.password, user.url, user.sync]);
  }

  update(user: User){
    let query = 'UPDATE user SET firstname=?,' +
    'lastname=?,' +
    'phone=?,' +
    'email=?,' +
    'password=?,' +
    'url=? ' +
    'WHERE id=?';
    return this.db.executeSql(query, [user.firstname, user.lastname, user.phone, user.email , user.password, user.url, user.id]);
  }

  delete(user: User){
    let query = 'DELETE FROM user where id = ?;';
    return this.db.executeSql(query, [user.id]);
  }
}
