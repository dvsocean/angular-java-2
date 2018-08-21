package com.angularjava2.angularjava2;

import java.util.ArrayList;
import java.util.List;

public class BookShelf {

  List<Books> rack = new ArrayList<>();

  public BookShelf() {
    this.rack.add(new Books("Relentless"));
    this.rack.add(new Books("Killing Kryptonite"));
    this.rack.add(new Books("Extraordinary"));
  }

  public Books selectByTitle(String title) {
    for(Books book: rack) {
      if(book.getTitle().equalsIgnoreCase(title)){
        return book;
      }
    }
    return null;
  }
}
