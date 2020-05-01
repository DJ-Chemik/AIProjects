<?php
App::uses('AppModel', 'Model');
/**
 * Employee Model
 *
 */
class Employee extends AppModel {
    var $validate = array(
        'nazwisko'=> array('rule' => 'notBlank'), 
        'etat' => array('rule' => 'notBlank'),
        'placa_pod' => array(
            'rule' => array('comparison', '>=', 0),
            'message' => 'Must be at least 0.'
        ),
        'placa_pod' => array(
            'rule' => array('comparison', '<=', 2000),
            'message' => 'Must be at beyond or equal 2000.'
        )
        
    );
    
}
