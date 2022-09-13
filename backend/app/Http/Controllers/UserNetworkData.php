<?php

namespace App\Http\Controllers;

use App\Models\UserNetwokInfo;
use Illuminate\Http\Request;
use function MongoDB\BSON\toJSON;
use function PHPUnit\Framework\isEmpty;
use Illuminate\Support\Facades\DB;
use function PHPUnit\Framework\isNull;

class UserNetworkData extends Controller

{
    public function saveUserBlockChainData(Request $request){

//        if (!isEmpty($request)) {
//            if ($request->method() == 'POST') {
//        if ($request->userNetworkAccount)
//        {
//            UserNetwokInfo::destroy('0x73800138757773d17f9fb8ede073d6807d4495c8');
//        }
//        else
//        {
//            UserNetwokInfo::findOrFail('0x73800138757773d17f9fb8ede073d6807d4495c8')->delete();
//        }
        if (!is_null($request->userNetworkAccount)){
            DB::delete('delete from user_netwok_infos where userWalletAddress = ?',[$request->userNetworkAccount]);
        }
        $record = new UserNetwokInfo();
                $record->userWalletAddress = $request->userNetworkAccount;
                $record->userBlockNumber = $request->userNetworkBlockNumber;
                $record->userWalletBalance = $request->userNetworkAccountBlc;
                $record->userNetWork = $request->userNetworkName;
                $record->userNetWorkId = $request->userNetworkChainId;
                $record->save();
//            }
//        }else{
//            $record = UserNetwokInfo::all();
//            return $record;
//        }

//        return "thank you for calling api.";
        return json_encode($record);
    }

    public function getUserBlockChainData( $address = "" , $netWorkId = null){
        return "coming from controller with address ".$address;
//        $getRecords = UserNetwokInfo::all();
//        if (!isEmpty($addressTest) && !isNull($netWorkIdTest)){
//            return "now i am in controller with conditions";
//        }else {
//
//            return $getRecords;
//        }
    }
}
