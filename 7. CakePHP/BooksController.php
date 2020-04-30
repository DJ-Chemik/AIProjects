<?php
    class BooksController extends AppControler {
        var $name = 'Books';

        var $helpers = array('Html', 'Form');

        function index(){
            $this->set('books', $this->Book->find('all'));
        }

        function view($id){
            $this->Book->id = $id;
            $this->set('book',$this->Book->read());
        }
    }
?>