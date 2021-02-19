$(document).ready(function() {
    const log = console.log;

    class Controller {
        constructor() {
            this.users = this.getUsers();
            this.show();
        }

        getUsers() {
            return localStorage.getItem("users");
        }

        addUser(name = "", surname = "", age = "") {
            let obj = {
                name,
                surname,
                age
            }

            if (this.users == null) {
                let arr = [obj]
                arr = JSON.stringify(arr);
                localStorage.setItem("users", arr);
            } else {
                let users = this.users;
                users = JSON.parse(users);
                users.push(obj);
                users = JSON.stringify(users);
                localStorage.setItem("users", users)
            }

            location.reload()
        }

        show() {
            if (this.users != null) {
                let users = JSON.parse(this.users)
                let table = $("<table><tr><th>name</th><th>surname</th><th>age</th></tr></table>");
                for (let i = 0; i < users.length; i++) {
                    let tr = $("<tr></tr>")
                    let tdName = $("<td>" + users[i].name + "</td>")
                    let tdSurname = $("<td>" + users[i].surname + "</td>")
                    let tdAge = $("<td>" + users[i].age + "</td>")
                    tr.append(tdName, tdSurname, tdAge);
                    table.append(tr)
                    $("body").append(table);
                }
            }
        }
    }

    let app = new Controller()

    $("#new").click(function() {
        $(this).hide();
        $(".addBlock").show();
    })

    $("#add").click(function() {
        let name = $("#name").val()
        let surname = $("#surname").val()
        let age = $("#age").val()
        app.addUser(name, surname, age)
    })




})