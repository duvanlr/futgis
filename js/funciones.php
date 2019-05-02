<?php 

  //Archivo de funciones

   include('configuracion.php');
   
   session_start();
   
   
   $peticion = isset($_POST['peticion']) ? $_POST['peticion'] : null;  
   $parametros = isset($_POST['parametros']) ? $_POST['parametros'] : null; 
   
   switch($peticion)
   {	
		//Caso para obtener lista usuarios 
		case 'obtener-listausuarios':
		{
			$sql="SELECT usuario, nombre, apellido from usuarios;";
			$query = pg_query($dbcon,$sql);
			// si se obtiene mas de un registro en el select
			$html="";
			while ($row = pg_fetch_row($query)) 
			{
				$html .=  '<option value="' . $row[0] . '" >' . $row[0].'-'.$row[1] . '</option>';
			}
			echo $html;
			break;
		}
		
	//Caso para obtener usuario 	
		case 'obtener-usuario':
		{
			$usuario = $parametros['usuario'];
			$sql="select nombre, apellido, rol from usuarios WHERE usuario = '$usuario';";
			$query3 = pg_query($dbcon,$sql);
			$row = pg_fetch_row($query3);
			echo $row[0].'|'.$row[1];
			break;
		}
		
		//Caso para modificar usuario
		case 'modificar-usuario':
		{
			$usuario = $parametros['usuario'];
			$nombre = $parametros['nombre'];
			$apellido = $parametros['apellido'];
			$rol = $parametros['rol'];
			
			$sql="UPDATE usuarios set nombre='$nombre' ,  apellido='$apellido', rol='$rol' WHERE usuario='$usuario';";
			$query = pg_query($dbcon,$sql);
			if($query)
			{
				echo "MODIFICADO";
			}else
			{
				echo "ERROR";
			}
			break;
		}
		
		//Caso para borrar un usuario 
		case 'borrar-usuario':
		{
			$usuario = $parametros['usuario'];
			
			$sql =  "DELETE FROM usuarios WHERE usuario='$usuario';";
			$query = pg_query($dbcon,$sql);
			if($query)
			{
				echo "ELIMINADO";
			}else
			{
				echo "ERROR";
			}
			break;
   		}

		case 'prueba':
		{
		$nombre= $_POST["nombreparq"];
		$usuario = $parametros['user'];
		
		$sql=	"SELECT row_to_json(fc) FROM
	(SELECT 'FeatureCollection' As type, array_to_json(array_agg(f)) As features FROM
		(SELECT	'Feature' As type,
						ST_AsGeoJSON(st_transform(lg.the_geom, 4326))::json As geometry,
						row_to_json	((SELECT l FROM (SELECT id_parq, nombre, direccion, the_geom) As l)) As properties
			FROM 	(SELECT id_parq, nombre, direccion, the_geom FROM parq
			WHERE nombre LIKE '$nombre') As lg   ) As f )  As fc";

      $query = pg_query($dbcon,$sql);
  		$row = pg_fetch_row($query);
  	    echo $row[0];
			//si se ejecuto la consulta con exito
			if($query)
			{
				echo "NUEVA_BUSQUEDA_CREADA";
				
				//registrar busquedas realizadas por los usuarios
				$sql2="INSERT INTO usuario_busquedas(id_parq)VALUES ($usuario);";
				$query2 = pg_query($dbcon,$sql2);

			}else
			{
				echo "NO VALIDO";
			}
			break;
		}
		
		
		
	} 


?>