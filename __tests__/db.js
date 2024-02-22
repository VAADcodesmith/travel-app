const fs = require('fs'); //require in fs to use for reading/writing other files
const path = require('path');
const db = require(''); //will be testing the database here so need to require in db functionality file when we get to there

//set up mock database in server file and store in variable
//mock database is used so we aren't messing with the production code
const testJsonFile = path.resolve(__dirname, '')

//backend tests are used with Jest
//backend ideas: login functionality, database, route integration (will need supertest for that)

describe('db unit tests', () => {

    //will need beforeAll func to clear out test db
    beforeAll((done) => {
        //
        fs.writeFile(testJsonFile, JSON.stringify([]), () => {
            db.reset();//reset the database to be empty
            done();
        });
    });
    //afterAll acts as a teardown method that Jest will run after all of the tests
    afterAll((done) => {
        fs.writeFile(testJsonFile, JSON.stringify([]), done);
    })

    //will need to update logic once we fully build out login system
    describe('#sync', () => {
        //user is added to database?
        it('write a valid user to the JSON file'), () => {
            const user = [{ username: 'hi', password: 'test'}];
            const result = db.sync(user);
            expect(result).not.toBeInstanceOf(Error);
            const userList = JSON.parse(fs.readFileSync(testJsonFile));
            expect(userList).toEqual(user);
        }
    })
})