package com.angularjava2.angularjava2;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BooksController {

  private BookShelf shelf = new BookShelf();

  @GetMapping("/title/{title}")
  public Books shouldReturnByTitle(@PathVariable("title") String title){
    return shelf.selectByTitle(title);
  }

}
