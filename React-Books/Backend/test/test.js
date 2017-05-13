var facade = require("./../facade")
var expect = require("chai").expect
var testdata = require("./testdata")
var testURL = 'mongodb://127.0.0.1/booksdbTest'

describe('booktest', function(){



before(function(done){
    expect(testdata).to.not.equal(null)
    done()
})

beforeEach(function(done){
    facade.setURL(testURL)
    baseState(function(bool){
        expect(bool).to.be.equal(true)
        done()
    })
})


describe('insertBook',function(){
    it('Should Save and return inserted!', function(done){
        var bookToinsert = {title:"Test Book", info:"No very Smart", moreInfo:"Hello"}
        facade.addBook(bookToinsert,function(data){
            expect(data.id).to.be.above(0)
            done()
        })
    })
})

describe('readAll', function(){
    it('Should Read All Books', function(done){
        facade.getBooks(function(data){
            expect(data.length).to.be.equal(2)
            expect(data[0].title).to.be.equal("Javascript Best Practices")
            done()
        })
    })
})

describe('editBook', function(){
    var newTitle = "this is a new Title"
    var newmoreInfo = "Im giving you some more info"
    it('Edit a book and checks the return value', (done) =>{
        facade.getBooks(function(tempData){
            tempData[0].title = newTitle
            tempData[0].moreInfo = newmoreInfo
            facade.updateBook(tempData[0],(data) =>{
                expect(data.title).to.equal(newTitle)
                expect(data.moreInfo).to.equal(newmoreInfo)
                done()
            })
        })
    })
})

describe('deleteBook', function(){
    it('Deletes a book from the Collection', function(done){
        facade.getBooks(function(tempData){
            var bookIdToBeDeleted = tempData[0].id
            facade.deleteBook(bookIdToBeDeleted, (data)=>{
                expect(data.deletedCount).to.be.equal(1)
                done()
            })
        })
    })
})


function baseState(callback){
    var MongoClient = require('mongodb').MongoClient
    MongoClient.connect(testURL,function(err,db){
        var collection = db.collection('books')
        collection.drop(function(err,replay){
            db.close()
            insertTestData(callback)
        })
    })
}

function insertTestData(callback){
    var itemsProcessed = 0
    testdata.testData.forEach(function(element) {
      facade.addBook(element, function(){
        itemsProcessed++
        if(itemsProcessed == testdata.testData.length) callback(true)
      }) 
    })
}



})