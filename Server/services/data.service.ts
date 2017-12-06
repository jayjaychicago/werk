﻿import * as mySql from "mysql";
import * as rx from "rxjs";

import { User } from "../models/user.model";
import { Message } from "../models/message.model";

export class DataService {
    private pool: mySql.Pool;
    private allUserSubject: rx.Subject<Message>;

    constructor() {
        this.configureObservables();
        this.configurePool();
    }

    private configureObservables() {
        this.allUserSubject = new rx.Subject<Message>();
    }

    private configurePool() {
        this.pool = mySql.createPool({
            connectionLimit: 1000,
            host: "werk.cj9exqhmef1n.us-east-1.rds.amazonaws.com",
            port: 3306,
            user: "root",
            password: "Canada123!!!",
            database: "werk"
        });
    }

    public getUsers(socket: any): void {
        const self = this;
        this.pool.getConnection((err, connection) => {
            if (!err) {
                connection.query("call get_users", function (err, rows, fields) {
                    if (!err) {
                        socket.emit("allUsersAvailable", rows);
                    }
                    else {
                        console.log("Error while performing Query. " + err);
                    }
                });

                connection.release();
            }
            else {
                console.log("Error while performing connection. " + err);
            }
        });
    }

    public getRooms(socket: any): void {
        const self = this;
        this.pool.getConnection((err, connection) => {
            if (!err) {
                connection.query("call get_rooms", function (err, rows, fields) {
                    if (!err) {
                        socket.emit("allRoomsAvailable", rows);
                    }
                    else {
                        console.log("Error while performing Query. " + err);
                    }
                });

                connection.release();
            }
            else {
                console.log("Error while performing connection. " + err);
            }
        });
    }

    public getFactions(socket: any, roomId: number): void {
        const self = this;
        this.pool.getConnection((err, connection) => {
            if (!err) {
                connection.query("call get_factions(" + roomId + ")", function (err, rows, fields) {
                    if (!err) {
                        socket.emit("allFactionsAvailable", rows);
                    }
                    else {
                        console.log("Error while performing Query. " + err);
                    }
                });

                connection.release();
            }
            else {
                console.log("Error while performing connection. " + err);
            }
        });
    }

    public getFactionUsers(socket: any, factionId: number): void {
        const self = this;
        this.pool.getConnection((err, connection) => {
            if (!err) {
                connection.query("call get_faction_users(" + factionId + ")", function (err, rows, fields) {
                    if (!err) {
                        socket.emit("factionUsersAvailable", rows);
                    }
                    else {
                        console.log("Error while performing Query. " + err);
                    }
                });

                connection.release();
            }
            else {
                console.log("Error while performing connection. " + err);
            }
        });
    }
}