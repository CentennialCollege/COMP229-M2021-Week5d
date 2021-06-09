"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessDeletePage = exports.ProcessAddPage = exports.ProcessEditPage = exports.DisplayAddPage = exports.DisplayEditPage = exports.DisplayClothingListPage = void 0;
const clothing_1 = __importDefault(require("../Models/clothing"));
function DisplayClothingListPage(req, res, next) {
    clothing_1.default.find((err, clothingCollection) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Clothing List', page: 'clothing-list', clothing: clothingCollection });
    });
}
exports.DisplayClothingListPage = DisplayClothingListPage;
function DisplayEditPage(req, res, next) {
    let id = req.params.id;
    clothing_1.default.findById(id, {}, {}, (err, clothingItemToEdit) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Edit', page: 'update', clothing: clothingItemToEdit });
    });
}
exports.DisplayEditPage = DisplayEditPage;
function DisplayAddPage(req, res, next) {
    res.render('index', { title: 'Add', page: 'update', clothing: '' });
}
exports.DisplayAddPage = DisplayAddPage;
function ProcessEditPage(req, res, next) {
}
exports.ProcessEditPage = ProcessEditPage;
function ProcessAddPage(req, res, next) {
}
exports.ProcessAddPage = ProcessAddPage;
function ProcessDeletePage(req, res, next) {
}
exports.ProcessDeletePage = ProcessDeletePage;
//# sourceMappingURL=clothing.js.map